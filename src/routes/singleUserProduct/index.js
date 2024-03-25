var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const Products = require('../../modals/Product');
var router = express.Router()
router.get('/userProducts/:email',verifyToken, async (req, res) => {
    const email = req.params.email;
    const query = {ownerEmail: email}
    const result = await Products.find(query);
    res.send(result)
}) 
module.exports = router;