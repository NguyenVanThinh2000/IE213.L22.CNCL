var express = require('express');
var router = express.Router();

const all_productsController = require('../controllers/all_productsController');

router.get('/:slug/:id', all_productsController.detail);
router.get('/:slug', all_productsController.show);
router.get('/', all_productsController.index);

module.exports = router;