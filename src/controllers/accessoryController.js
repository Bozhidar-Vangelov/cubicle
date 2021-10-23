const express = require('express');
const router = express.Router();

router.get('/accessory', (req, res) => {
  res.render('accessory/create');
});

router.post('/accessory', (req, res) => {
  let accessory = req.body;

  console.log(accessory);

  res.redirect('/');
});

module.exports = router;
