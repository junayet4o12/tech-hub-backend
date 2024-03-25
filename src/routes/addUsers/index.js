var express = require('express');
const Users = require('../../modals/Users');
const checkDuplicateUser = require('../../lib/Users/User');
var router = express.Router()

router.post('/users', async (req, res) => {
    const user = req.body;
    const axistingUser = await checkDuplicateUser(user)
    console.log(axistingUser);
    if (axistingUser) {
        return res.send({ message: ' use already exists' })
    }
    const result = await Users.create(user);
    res.send(result)
}) 
module.exports = router