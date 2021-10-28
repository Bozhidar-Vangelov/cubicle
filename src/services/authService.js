const User = require('../models/User.js');

async function register(username, password, repeatPassword) {
  return User.create({ username, password });
}

const authService = {
  register,
};

module.exports = authService;
