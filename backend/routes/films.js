var express = require('express');
var router = express.Router();
const { createFilm } = require('../controllers/film');
const { verifyToken } = require('../middleware/verifyToken');


router.post('/', verifyToken, createFilm);

module.exports = router;