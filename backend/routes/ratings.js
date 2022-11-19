var express = require('express');
var router = express.Router();
const { createRating, getFilmFavoriteById } = require('../controllers/rating');
const { verifyToken } = require('../middleware/verifyToken');
const { isCustomer } = require('../middleware');

router.post('/:random', isCustomer, createRating);
router.get('/favorite', isCustomer, getFilmFavoriteById);

module.exports = router;