const { TOKEN_COOKIE_NAME, SECRET } = require('../constants.js');
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  let token = req.cookies[TOKEN_COOKIE_NAME];

  if (!token) {
    return next();
  }

  jwt.verify(token, SECRET, function (err, decodedToken) {
    if (err) {
      res.status(401).redirect('/login');
    }

    req.user = decodedToken;

    next();
  });
}

const authMiddleware = {
  verifyToken,
};

module.exports = authMiddleware;
