var express = require('express');
var router = express.Router();
const { getGenre, getGenres, createGenre, updateGenre, deleteGenre } = require('../controllers/genre');
const { verifyToken } = require('../middleware/verifyToken');
const { isCustomer } = require('../middleware/');

router.get('/', isCustomer, getGenres);
router.get('/:id', getGenre);
router.post('/', verifyToken, createGenre);
router.put('/:id', updateGenre);
router.delete('/:id', deleteGenre);

module.exports = router;
