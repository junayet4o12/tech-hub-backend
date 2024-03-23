const jwt = require('jsonwebtoken');
require('dotenv').config()
const createSecretToken = async (req, res, next) => {
    const user = req.body;
    console.log(user,process.env.ACCESS_TOKEN_SECRET);
    // const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    //     expiresIn: '1h'
    // })
    const token = jwt.sign(user, process?.env?.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h'
    })
    res.send({ token })
}

module.exports = createSecretToken