var express = require('express');
var express = require('express');
var router = express.Router();
const { getRoles, createRole } = require('../controllers/role');

router.get('/', getRoles);
router.post('/', createRole);

module.exports = router;