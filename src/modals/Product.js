const mongoose = require('mongoose')
const { Schema, model } = mongoose;
const productSchema = new Schema({
    ownerEmail: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
})

const Products = model('Products', productSchema);
module.exports = Products;