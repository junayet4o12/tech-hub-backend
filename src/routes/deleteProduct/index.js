var express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const Products = require('../../modals/Product');
var router = express.Router();

router.delete('/deleteProduct/:id', verifyToken, async (req, res) => {
    const id = req?.params?.id;
    console.log(id);
    const result = await Products.findByIdAndDelete(id);
    res.send(result)
})
module.exports = router;