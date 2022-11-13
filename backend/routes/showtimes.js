var express = require('express');
var router = express.Router();
const { getShowtimeByFilm } = require('../controllers/showtime');
const { verifyToken } = require('../middleware/verifyToken');
const { isCustomer, isSaler } = require('../middleware/');

router.get('/:random', verifyToken, getShowtimeByFilm);

module.exports = router;