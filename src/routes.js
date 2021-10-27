const express = require('express');

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');
const accessoryController = require('./controllers/accessoryController.js');

const router = express.Router();

router.use(homeController);
router.use(cubeController);
router.use(accessoryController);
router.use('*', (req, res) => {
  res.render('404');
});

module.exports = router;
