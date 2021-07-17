var express = require('express');
var router = express.Router();

const adminController = require('../controllers/adminController');



router.get('/add', adminController.add);
router.get('/:id/edit', adminController.edit);
router.put('/:id', adminController.update);
router.delete('/:id', adminController.delete);
router.post('/store', adminController.store);
router.get('/', adminController.index);

module.exports = router;