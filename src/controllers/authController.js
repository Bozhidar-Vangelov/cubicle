const router = require('express').Router();
const authService = require('../services/authService.js');

router.get('/register', (req, res) => {
  res.render('auth/register');
});

router.post('/register', async (req, res) => {
  let { username, password, repeatPassword } = req.body;

  await authService.register(username, password, repeatPassword);

  res.redirect('/login');
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', async (req, res) => {
  let { username, password } = req.body;

  let user = await authService.login(username, password);

  if (!user) {
    return res.redirect('/404');
  }

  let token = await authService.createToken(user);

  console.log(token);

  res.redirect('/');
});

module.exports = router;
