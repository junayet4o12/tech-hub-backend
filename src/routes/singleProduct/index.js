var express = require('express');
const Products = require('../../modals/Product');
var router = express.Router();

router.get('/singleProduct/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Products.findById(id);
    res.send(result)
})

module.exports= router