var express = require('express');
const Products = require('../../modals/Product');
var router = express.Router()
router.post('/addProduct', async (req, res) => {
    const user = req.body;
    const result = await Products.create(user);
    res.send(result)
}) 
module.exports = router;