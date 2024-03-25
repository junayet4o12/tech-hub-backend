var express = require('express');
const Users = require('../../modals/Users');
var router = express.Router()


router.get('/users', async (req, res) => {
    const result = await Users.find();
    res.send(result)
}) 
module.exports = router