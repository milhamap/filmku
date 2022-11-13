var express = require('express');
var router = express.Router();
const { createChair, getChairs } = require('../controllers/chair');
const { verifyToken } = require('../middleware/verifyToken');
const { isCustomer, isSaler } = require('../middleware/index');

router.get('/', verifyToken, getChairs);
router.post('/', isSaler, createChair);

module.exports = router;