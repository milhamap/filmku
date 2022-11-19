var express = require('express');
var router = express.Router();
const { createRoom, getRooms, updateRoom, getRoom } = require('../controllers/room');
const { verifyToken } = require('../middleware/verifyToken');
const { isCustomer, isSaler } = require('../middleware/');

router.get('/', verifyToken, getRooms);
router.post('/', isSaler, createRoom);
router.put('/:random', isSaler, updateRoom);
router.get('/:random', isSaler, getRoom);

module.exports = router;