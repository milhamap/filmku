var express = require('express');
var router = express.Router();
const { createRating } = require('../controllers/rating');
const { verifyToken } = require('../middleware/verifyToken');
const { isCustomer } = require('../middleware');

router.post('/:random', isCustomer, createRating);

module.exports = router;