var express = require('express');
var router = express.Router();
const { getUser, register, login, refreshToken, logout } = require('../controllers/user');
const { verifyToken } = require('../middleware/verifyToken');
const { isCustomer } = require('../middleware/');

router.get('/', verifyToken, getUser);
router.post('/register', register);
router.post('/login', login);
router.get('/refresh-token', refreshToken);
router.delete('/logout', logout);

module.exports = router;
