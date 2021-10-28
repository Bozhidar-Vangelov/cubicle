const router = require('express').Router();

const cubeService = require('../services/cubeService.js');
const cubeAccessoryController = require('./cubeAccessoryController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

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

router.get('/create/cube', authMiddleware.isAuth, getCreateCube);
router.post('/create/cube', authMiddleware.isAuth, createCube);
router.get('/details/:cubeId', getCubeDetails);
router.get('/edit/cube/:cubeId', authMiddleware.isAuth, getEditCubePage);
router.get('/delete/cube/:cubeId', authMiddleware.isAuth, getDeleteCubePage);

router.use('/details/:cubeId/accessory', cubeAccessoryController);

module.exports = router;
