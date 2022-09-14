const bcrypt = require('bcryptjs');

class Auth {

  createPasswordHash(password) {
    return bcrypt.hash(password, 8);
  }

  checkPassword(user, password) {
    return bcrypt.compare(password, user.password);
  }

}

module.exports = new Auth();