var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const Products = require('../../modals/Product');
var router = express.Router();

router.put('/updateProduct/:id', verifyToken, async (req, res) => {
    const data = req?.body;
    const id = req?.params?.id;
    console.log(data, id);
    const updatedData = {
        productName: data?.productName,
        category: data?.category,
        imgUrl: data?.imgUrl,
        description: data?.description,
        price: data?.price
    }
    const result = await Products.findByIdAndUpdate(id, updatedData, { new: true })
    res.send(result)
})
module.exports = router