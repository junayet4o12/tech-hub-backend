var express = require('express');
var router = express.Router()

router.get('/health', async(req, res)=> {
    res.send('health is running')
});
module.exports = router;