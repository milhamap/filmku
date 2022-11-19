var express = require('express');
var router = express.Router();
const { getDetail, getDetailByShowtimeAndRoomId, createTransaction, getTransactionByUserId, deleteTransaction, uploadBuktiTransaction, getTransaction, updateStatusTransaction } = require('../controllers/transaction');
const { verifyToken } = require('../middleware/verifyToken');
const { isCustomer, isSaler } = require('../middleware/');

router.get('/:random', verifyToken, getDetail);
router.get('/:showtime_id/:room_id/:random', verifyToken, getDetailByShowtimeAndRoomId);
router.post('/:random', isCustomer, createTransaction);
router.get('/get/all', isSaler, getTransaction);
router.get('/', verifyToken, getTransactionByUserId);
router.put('/confirm/:random', isSaler, updateStatusTransaction);
router.post('/uploads/:random', isCustomer, uploadBuktiTransaction);
router.delete('/delete/:random', isCustomer, deleteTransaction);

module.exports = router;