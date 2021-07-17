var express = require('express');
var router = express.Router();

const homeRouter = require('../controllers/homeController');

router.get('/', homeRouter.index);

module.exports = router;