const { users } = require('../mocks');
const { createPasswordHash } = require('./auth');

module.exports = async () => {

  const passwords = ['123', '456', 'asd', 'abc'];

  for(let i = 0; i < passwords.length; i++) {
    const passwordPlain = passwords[i];

    passwords[i] = await createPasswordHash(passwordPlain);
  } 

  users.push({
    id: '28b88654-0a9a-4e46-9456-8f4017703cd2',
    name: 'Luís Felipe',
    email: 'luisfelipe@gmail.com',
    password: passwords[0],
    registrationDate: new Date(),
  });
  users.push({
    id: '28b88654-0a9a-4e46-9456-8f4017703cd3',
    name: 'Sarah Cristina',
    email: 'crissarah@gmail.com',
    password: passwords[1],
    registrationDate: new Date(),
  });
  users.push({
    id: '28b88654-0a9a-4e46-9456-8f4017703cd4',
    name: 'Oliveira Reginaldo',
    email: 'lionluis4@gmail.com',
    password: passwords[2],
    registrationDate: new Date(),
  });
  users.push({
    id: '28b88654-0a9a-4e46-9456-8f4017703cd5',
    name: 'Felipe Oliveira',
    email: 'felipstein.oliveira@gmail.com',
    password: passwords[3],
    registrationDate: new Date(),
  });
}; 