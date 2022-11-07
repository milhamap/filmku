var express = require('express');
var router = express.Router();
const { getFilms, createFilm, readImage } = require('../controllers/film');
const { verifyToken } = require('../middleware/verifyToken');

router.get('/', getFilms);
router.post('/', verifyToken, createFilm);
router.get('/thumbnail/:id', readImage);

module.exports = router;