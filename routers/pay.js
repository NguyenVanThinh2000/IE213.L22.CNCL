var express = require('express');
var router = express.Router();

const payController = require('../controllers/payController');

router.post('/order', payController.order);
router.get('/', payController.index);

module.exports = router;    