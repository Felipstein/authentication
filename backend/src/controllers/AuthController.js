const jwt = require('jsonwebtoken');

const UsersRepository = require('../repositories/UsersRepository');
const { checkPassword, createPasswordHash } = require('../services/auth');

class AuthController {

  async authenticate(request, response) {
    const { email, password } = request.body;

    
    if(!email) {
      return response.status(400).json({ error: 'Email is required' });
    }
    if(!password) {
      return response.status(400).json({ error: 'Password is required' });
    }

    const user = await UsersRepository.findUserByEmail(email);
    if(!user) {
      return response.status(401).json({ error: 'Authentication failed' });
    }
    
    if(!await checkPassword(user, password)) {
      return response.status(401).json({ error: 'Authentication failed' });
    }
    
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '7d' });

    const userCloned = { ...user };

    delete userCloned.password;

    response.status(200).json({ user: userCloned, token });
  }

  async register(request, response) {
    const { name, email, password, confirmPassword } = request.body;

    if(!name) {
      return response.status(400).json( { error: 'Name is required' });
    }
    if(!email) {
      return response.status(400).json( { error: 'Email is required' });
    }
    if(!password) {
      return response.status(400).json( { error: 'Password is required' });
    }
    if(!confirmPassword) {
      return response.status(400).json( { error: 'Confirm password is required' });
    }

    if(password !== confirmPassword) {
      return response.status(400).json( { error: 'Passwords do not match' });
    }

    const emailAlreadyExists = await UsersRepository.findUserByEmail(email);
    if(emailAlreadyExists) {
      return response.status(400).json( { error: 'Email already in use' });
    }

    const encryptedPassword = createPasswordHash(password);

    const user = await UsersRepository.createUser({ name, email, password: encryptedPassword, registrationDate: new Date() });

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '7d' });

    delete user.password;

    return response.json({ user, token });
  }

}

module.exports = new AuthController();