let { users } = require('../mocks');
const uuid = require('uuid-v4');

class UsersRepository {

  listAll() {
    return new Promise((resolve) => {
      resolve(users);
    });
  }

  findUserById(id) {
    return new Promise((resolve) => {
      const user = users.find(userObj => userObj.id === id);

      resolve(user);
    });
  }

  findUserByEmail(email) {
    return new Promise((resolve) => {
      const user = users.find(userObj => userObj.email === email);

      resolve(user);
    });
  }

  createUser({ name, email, password, registrationDate }) {
    return new Promise((resolve, reject) => {
      const emailAlreadyExists = users.find(user => user.email === email);

      if(emailAlreadyExists) {
        return reject({ error: 'Email already exists' });
      }

      const newUser = { id: uuid(), name, email, password, registrationDate };

      users.push(newUser);
      resolve(newUser);
    })
  }

  updateUser(id, { name, email, password }) {
    return new Promise((resolve, reject) => {
      const userExists = users.find(user => user.id === id);
      if(!userExists) {
        return resolve();
      }

      const user = { id, name, email, password, registrationDate: userExists.date };

      users = users.map(userObj => userObj.id === id ? user : userObj);

      resolve(user);
    });
  }

  deleteUser(id) {
    return new Promise((resolve) => {
      const userExists = users.find(user => user.id === id);
      if(!userExists) {
        return resolve();
      }

      users = users.filter(user => user.id !== id);

      resolve();
    });
  }

}

module.exports = new UsersRepository();