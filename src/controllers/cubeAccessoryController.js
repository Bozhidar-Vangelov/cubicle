const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/add-accessory', (req, res) => {
  console.log(req.params.cubeId);

  res.end();
});

module.exports = router;
