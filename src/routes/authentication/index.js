var express = require('express');
const createSecretToken = require('../../api/authentication/controllers/createSecretToken');
var router = express.Router()

router.post('/jwt', createSecretToken);
module.exports = router;