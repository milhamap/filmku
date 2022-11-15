var express = require('express');
var router = express.Router();
const { getDetail, getDetailByShowtimeAndRoomId, createTransaction } = require('../controllers/transaction');
const { verifyToken } = require('../middleware/verifyToken');
const { isCustomer, isSaler } = require('../middleware/');

router.get('/:random', verifyToken, getDetail);
router.get('/:showtime_id/:room_id/:random', verifyToken, getDetailByShowtimeAndRoomId);
router.post('/:random', isCustomer, createTransaction);

module.exports = router;