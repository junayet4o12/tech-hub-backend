const express = require('express')
const mongoose = require('mongoose')
const app = express()
const jwt = require('jsonwebtoken');
const connectDB = require('./src/db/connectDB');
const applyMiddleWare = require('./src/middlewares/applyMiddlewares');
const port = process.env.PORT || 5000
const authenticationRouts = require('./src/routes/authentication/index')
applyMiddleWare(app)
const servicesRouts = require('./src/routes/Users/index')
const addUser = require('./src/routes/addUsers/index')
const addProduct = require('./src/routes/addProduct/index')
const globalRouts = require('./src/routes/globalRouts/index')
const allProducts = require('./src/routes/allProducts/index')
const singleUserProducts = require('./src/routes/singleUserProduct/index')
const deleteProduct = require('./src/routes/deleteProduct/index')
const singleProduct = require('./src/routes/singleProduct/index')
const updateProduct = require('./src/routes/productUpdate/index')
app.use(globalRouts)
app.use(authenticationRouts)
app.use(servicesRouts)
app.use(addUser)
app.use(addProduct)
app.use(allProducts)
app.use(singleUserProducts)
app.use(deleteProduct)
app.use(singleProduct)
app.use(updateProduct)


app.all("*", (req, res, next) => {
    const error = new Error(`The requested Url is invalid : [${req?.url}]`)
    error.status = 404;
    next(error)
})
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
main()
