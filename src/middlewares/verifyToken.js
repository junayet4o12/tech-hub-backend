const jwt = require('jsonwebtoken');
require('dotenv').config()
const verifyToken = (req, res, next) => {
    console.log('inside vefified token', req.headers.authorization);
    if (!req?.headers?.authorization) {
        return res.status(401).send({ message: 'unauthrised' })
    }
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'unauthrised' })
        }
        req.decoded = decoded

        next()
    })
}

module.exports = verifyToken; 