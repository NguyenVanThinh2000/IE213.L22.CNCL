var express = require('express');
var router = express.Router();

const registryController = require('../controllers/registryController');

router.get('/', registryController.index);
router.post('/store', registryController.store);

module.exports = router;