const router = require('express').Router();
const portfolio = require('./portfolio');
require('../db/mongoConnection');

router.get('/', (req, res) => {
    res.json({
        success:false,
        message: 'Please, don not call /api, it is for our server'
    })
})

router.use('/portfolio', portfolio);

module.exports = router