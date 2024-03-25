var express = require('express');
const Products = require('../../modals/Product');
const verifyToken = require('../../middlewares/verifyToken');
var router = express.Router()
router.get('/allProducts',verifyToken, async (req, res) => {
    const result = await Products.find();
    res.send(result)
}) 
module.exports = router;