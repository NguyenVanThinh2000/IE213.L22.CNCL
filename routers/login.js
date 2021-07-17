var express = require('express');
var router = express.Router();

const loginController = require('../controllers/loginController');

router.get('/', loginController.index);
router.post('/check_login', loginController.check_login);
router.get('/logout', loginController.logout);

module.exports = router;    