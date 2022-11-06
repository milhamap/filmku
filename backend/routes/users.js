var express = require('express');
var router = express.Router();
const { register, login, refreshToken, logout } = require('../controllers/user');
const { verifyToken } = require('../middleware/verifyToken');

router.post('/register', register);
router.post('/login', login);
router.get('/refresh-token', refreshToken);
router.delete('/logout', logout);

module.exports = router;
