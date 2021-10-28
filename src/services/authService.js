const bcrypt = require('bcrypt');

const User = require('../models/User.js');

async function register(username, password, repeatPassword) {
  let hash = await bcrypt.hash(password, 10);

  return User.create({ username, password: hash });
}

const authService = {
  register,
};

module.exports = authService;
