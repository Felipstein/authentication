const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {

  const { authorization } = request.headers;

  if(!authorization) {
    return response.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    jwt.verify(token, process.env.SECRET_KEY);
    return next();
  } catch {
    return response.sendStatus(401);
  }
}