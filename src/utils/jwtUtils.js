const jwt = require('jsonwebtoken');

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

const jwtUtils = {
  promiseSign,
};

module.exports = jwtUtils;
