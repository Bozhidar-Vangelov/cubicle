const express = require('express');
const router = express.Router({ mergeParams: true });

const cubeService = require('../services/cubeService.js');

router.get('/add-accessory', async (req, res) => {
  let cube = await cubeService.getOne(req.params.cubeId);

  res.render('cube/attachAccessory', { ...cube });
});

module.exports = router;
