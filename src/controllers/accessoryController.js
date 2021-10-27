const router = require('express').Router();

const accessoryService = require('../services/accessoryService.js');

router.get('/accessory', (req, res) => {
  res.render('accessory/create');
});

router.post('/accessory', async (req, res) => {
  let { name, description, imageUrl } = req.body;

  await accessoryService.create(name, description, imageUrl);

  res.redirect('/');
});

module.exports = router;
