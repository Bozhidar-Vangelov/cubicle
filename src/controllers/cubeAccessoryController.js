const express = require('express');
const router = express.Router({ mergeParams: true });

const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');

router.get('/add-accessory', async (req, res) => {
  let cube = await cubeService.getOne(req.params.cubeId);
  let accessories = await accessoryService.getAll();

  console.log(accessories);

  res.render('cube/attachAccessory', { cube, accessories });
});

router.post('/add-accessory', async (req, res) => {
  const cubeId = req.params.cubeId;

  await cubeService.attachAccessory(cubeId, req.body.accessory);

  res.redirect(`/details/${cubeId}`);
});

module.exports = router;
