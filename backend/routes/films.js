var express = require('express');
var router = express.Router();
const { getFilm, getFilms, getFilmsComingSoon, getFilmsOnGoing, createFilm, readImage, getFilmByRating, getFilmByUserId, updateFilm, deleteFilm } = require('../controllers/film');
const { verifyToken } = require('../middleware/verifyToken');
const { isCustomer, isSaler } = require('../middleware/index');

// router.get('/byTitle', getFIlmByTitle);
router.get('/', getFilms);
router.get('/coming-soon', getFilmsComingSoon);
router.get('/bioskop', isSaler, getFilmByUserId);
router.get('/rating', getFilmByRating);
router.get('/on-going', getFilmsOnGoing);
router.get('/:random', getFilm);
router.post('/', isSaler, createFilm);
router.get('/thumbnail/:id', readImage);
router.put('/:random', isSaler, updateFilm);
router.delete('/:random', isSaler, deleteFilm);

module.exports = router;