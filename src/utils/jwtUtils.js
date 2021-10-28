const jwt = require('jsonwebtoken');
const { SECRET } = require('../constants.js');

function promiseSign(payload, secret) {
  let promise = new Promise((resolve, reject) => {
    jwt.sign(payload, secret, function (err, token) {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
  return promise;
}

function createToken(user) {
  let payload = {
    _id: user.get('_id'),
    username: user.get('username'),
  };

  return sign(payload, SECRET);
}

const jwtUtils = {
  promiseSign,
  createToken,
};

module.exports = jwtUtils;
