const router = require('express').Router();

const cubeService = require('../services/cubeService.js');
const cubeAccessoryController = require('./cubeAccessoryController.js');

const getCreateCube = (req, res) => {
  res.render('cube/create');
};

const createCube = async (req, res) => {
  let { name, description, imageUrl, difficulty } = req.body;

  await cubeService.create(name, description, imageUrl, difficulty);

  res.redirect('/');
};

const getCubeDetails = async (req, res) => {
  let cube = await cubeService.getOne(req.params.cubeId);

  res.render('cube/details', { ...cube });
};

const getEditCubePage = (req, res) => {
  res.render('cube/edit');
};

const getDeleteCubePage = (req, res) => {
  res.render('cube/delete');
};

router.get('/create/cube', getCreateCube);
router.post('/create/cube', createCube);
router.get('/details/:cubeId', getCubeDetails);
router.use('/details/:cubeId/accessory', cubeAccessoryController);
router.get('/edit/cube/:cubeId', getEditCubePage);
router.get('/delete/cube/:cubeId', getDeleteCubePage);

module.exports = router;
