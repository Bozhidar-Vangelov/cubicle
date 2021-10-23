const express = require('express');
const router = express.Router({ mergeParams: true });

const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');

router.get('/add-accessory', async (req, res) => {
  let cube = await cubeService.getOne(req.params.cubeId);
  let accessories = await accessoryService.getAll();

  res.render('cube/attachAccessory', { cube, accessories });
});

module.exports = router;
