const express = require('express')
const mongoose = require('mongoose')
const app = express()
const jwt = require('jsonwebtoken');
const connectDB = require('./src/db/connectDB');
const applyMiddleWare = require('./src/middlewares/applyMiddlewares');
const port = process.env.PORT || 5000
const authenticationRouts = require('./src/routes/authentication/index')
applyMiddleWare(app)



// app.post('/jwt', )

app.use(authenticationRouts)
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
