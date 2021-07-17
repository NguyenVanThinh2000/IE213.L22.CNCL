var express = require('express');
var router = express.Router();

const cartController = require('../controllers/cartController');

router.delete('/:id', cartController.delete);
router.get('/:id', cartController.add_to_cart);
router.get('/', cartController.index);

module.exports = router;    