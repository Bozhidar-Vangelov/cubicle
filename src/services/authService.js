const User = require('../models/User.js');
const bcrypt = require('bcrypt');

const jwtUtils = require('../utils/jwtUtils.js');
const { SECRET } = require('../constants.js');

function register(username, password) {
  return User.create({ username, password });
}

async function login(username, password) {
  let user = await User.findOne({ username });

  try {
    let isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw { message: 'Cannot find username or password' };
    }

    return user;
  } catch (error) {
    console.log(error);
    return;
  }
}

function createToken(user) {
  let payload = {
    _id: user._id,
    username: user.username,
  };

  return jwtUtils.promiseSign(payload, SECRET);
}

const authService = {
  register,
  login,
  createToken,
};

module.exports = authService;
