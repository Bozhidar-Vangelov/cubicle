const express = require('express');

const cubeService = require('../services/cubeService.js');

const router = express.Router();

const getCreateCube = (req, res) => {
  let cubes = cubeService.getAll();

  console.log(cubes);

  res.render('create');
};

const createCube = (req, res) => {
  let { name, description, imageUrl, difficulty } = req.body;

  cubeService.create(name, description, imageUrl, difficulty);

  res.redirect('/');
};

const getCubeDetails = (req, res) => {
  let cube = cubeService.getOne(req.params.cubeId);
  res.render('details', { ...cube });
};

router.get('/create', getCreateCube);
router.post('/create', createCube);
router.get('/details/:cubeId', getCubeDetails);

module.exports = router;
