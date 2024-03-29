const jwt = require('jsonwebtoken');

const UsersRepository = require('../repositories/UsersRepository');
const { checkPassword, createPasswordHash } = require('../services/auth');

class AuthController {

  async authenticate(request, response) {
    const { email, password } = request.body;

    
    if(!email) {
      return response.status(400).json({ error: 'E-mail é obrigatório' });
    }
    if(!password) {
      return response.status(400).json({ error: 'Senha é obrigatória' });
    }

    const user = await UsersRepository.findUserByEmail(email);
    if(!user) {
      return response.status(401).json({ error: 'E-mail não encontrado' });
    }
    
    if(!await checkPassword(user, password)) {
      return response.status(401).json({ error: 'Senha incorreta' });
    }
    
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '7d' });

    response.status(200).json({ user, token });
  }

  async register(request, response) {
    const { name, email, password, confirmPassword } = request.body;

    if(!name) {
      return response.status(400).json( { error: 'Nome é obrigatório' });
    }
    if(!email) {
      return response.status(400).json( { error: 'E-mail é obrigatório' });
    }
    if(!password) {
      return response.status(400).json( { error: 'Senha é obrigatória' });
    }
    if(!confirmPassword) {
      return response.status(400).json( { error: 'Confirmar senha é obrigatória' });
    }

    if(password.length < 3) {
      return response.status(400).json({ error: 'Senha não deve ter menos que 3 (três) caracteres' });
    }

    if(password !== confirmPassword) {
      return response.status(400).json( { error: 'As senhas não coincidem' });
    }

    const emailAlreadyExists = await UsersRepository.findUserByEmail(email);
    if(emailAlreadyExists) {
      return response.status(400).json( { error: 'E-mail já está em uso' });
    }

    const encryptedPassword = await createPasswordHash(password);

    const user = await UsersRepository.createUser({ name, email, password: encryptedPassword, registrationDate: new Date() });

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '7d' });

    return response.json({ user, token });
  }

  async validate(request, response) {
    const { token } = request.body;
    
    if(!token) {
      return response.sendStatus(400);
    }

    try {
      jwt.verify(token, process.env.SECRET_KEY);

      const { id } = jwt.decode(token);

      if(!id) {
        return response.sendStatus(400);
      }

      const user = await UsersRepository.findUserById(id);

      if(!user) {
        return response.sendStatus(400);
      }

      return response.status(200).json(user);
    } catch {
      return response.status(401).json({ error: 'Invalid token' });
    }
  }

}

module.exports = new AuthController();