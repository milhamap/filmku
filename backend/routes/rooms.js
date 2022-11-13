var express = require('express');
var router = express.Router();
const { createRoom, getRooms } = require('../controllers/room');
const { verifyToken } = require('../middleware/verifyToken');
const { isCustomer, isSaler } = require('../middleware/');

router.get('/', verifyToken, getRooms);
router.post('/', isSaler, createRoom);

module.exports = router;