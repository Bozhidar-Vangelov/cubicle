const router = require('express').Router();

const accessoryService = require('../services/accessoryService.js');

router.get('/create/accessory', (req, res) => {
  res.render('accessory/create');
});

router.post('/create/accessory', async (req, res) => {
  let { name, description, imageUrl } = req.body;

  await accessoryService.create(name, description, imageUrl);

  res.redirect('/');
});

module.exports = router;
