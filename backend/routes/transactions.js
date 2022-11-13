var express = require('express');
var router = express.Router();
const { getDetail } = require('../controllers/transaction');
const { verifyToken } = require('../middleware/verifyToken');
const { isCustomer, isSaler } = require('../middleware/');

router.get('/:random', verifyToken, getDetail);

module.exports = router;