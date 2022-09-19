const { users } = require('../mocks');
const { createPasswordHashSync } = require('./auth');

module.exports = async () => {
  users.push({
    id: '28b88654-0a9a-4e46-9456-8f4017703cd2',
    name: 'Luís Felipe',
    email: 'luisfelipe@gmail.com',
    password: createPasswordHashSync('123'),
    registrationDate: new Date(),
  });
  users.push({
    id: '28b88654-0a9a-4e46-9456-8f4017703cd3',
    name: 'Sarah Cristina',
    email: 'crissarah@gmail.com',
    password: createPasswordHashSync('456'),
    registrationDate: new Date(),
  });
  users.push({
    id: '28b88654-0a9a-4e46-9456-8f4017703cd4',
    name: 'Oliveira Reginaldo',
    email: 'lionluis4@gmail.com',
    password: createPasswordHashSync('asd'),
    registrationDate: new Date(),
  });
  users.push({
    id: '28b88654-0a9a-4e46-9456-8f4017703cd5',
    name: 'Felipe Oliveira',
    email: 'felipstein.oliveira@gmail.com',
    password: createPasswordHashSync('abc'),
    registrationDate: new Date(),
  });
}; 