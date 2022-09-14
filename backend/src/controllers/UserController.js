const { isUUID } = require('uuid-v4');

const UsersRepository = require('../repositories/UsersRepository');
const { createPasswordHash } = require('../services/auth');

class UserController {

  async index(request, response) {
    const users = await UsersRepository.listAll();

    response.status(200).json(users);
  }

  async show(request, response) {
    const { id } = request.params;

    if(!isUUID(id)) {
      return response.status(400).json({ error: 'Invalid id' });
    }

    const user = await UsersRepository.findUserById(id);

    if(!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.status(200).json(user);
  }

  async store(request, response) {
    const { name, email, password } = request.body;

    if(!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    if(!email) {
      return response.status(400).json({ error: 'Email is required' });
    }
    if(!password) {
      return response.status(400).json({ error: 'Password is required' });
    }

    const emailAlreadyExists = await UsersRepository.findUserByEmail(email);

    if(emailAlreadyExists) {
      return response.status(400).json({ error: 'Email already in use' });
    }
 
    const encryptedPassword = await createPasswordHash(password);

    const user = await UsersRepository.createUser({ name, email, password: encryptedPassword, registrationDate: new Date() });

    response.status(200).json(user);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, password } = request.body;

    if(!isUUID(id)) {
      return response.status(400).json({ error: 'Invalid id' });
    }

    if(!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    if(!email) {
      return response.status(400).json({ error: 'Email is required' });
    }
    if(!password) {
      return response.status(400).json({ error: 'Password is required' });
    }

    const userExists = await UsersRepository.findUserById(id);
    if(!userExists) {
      return response.status(400).json({ error: 'User not found' });
    }

    const userByEmail = await UsersRepository.findUserByEmail(email);
    if(userByEmail && userByEmail.id !== id) {
      return response.status(400).json({ error: 'Email already in use' });
    }

    const encryptedPassword = await createPasswordHash(password);

    const user = await UsersRepository.updateUser(id, { name, email, password: encryptedPassword });

    response.status(200).json({ user });
  }

  async delete(request, response) {
    const { id } = request.params;

    if(!isUUID(id)) {
      return response.status(400).json({ error: 'Invalid id' });
    }

    await UsersRepository.deleteUser(id);

    response.sendStatus(204);
  }

}

module.exports = new UserController();