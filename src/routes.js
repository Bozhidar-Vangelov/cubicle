const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');
const accessoryController = require('./controllers/accessoryController.js');
const authController = require('./controllers/authController.js');

router.use(homeController);
router.use(cubeController);
router.use(accessoryController);
router.use(authController);
router.use('*', (req, res) => {
  res.status(404).render('404');
});

module.exports = router;
