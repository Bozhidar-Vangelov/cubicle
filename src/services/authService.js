const User = require('../models/User.js');
const bcrypt = require('bcrypt');

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

  //   return User.findOne({ username })
  //     .then((user) => {
  //       return Promise.all([bcrypt.compare(password, user.password), user]);
  //     })
  //     .then(([isValid, user]) => {
  //       if (isValid) {
  //         return user;
  //       } else {
  //         throw { message: 'Cannot find username or password' };
  //       }
  //     });
}

const authService = {
  register,
  login,
};

module.exports = authService;
