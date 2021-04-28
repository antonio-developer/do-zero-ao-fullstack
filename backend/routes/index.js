const router = require('express').Router();
const portfolio = require('./portfolio');

router.get('/', (req, res) => {
    res.json({
        success:false,
        message: 'Please, don not call /api, it is for our server'
    })
})

router.use('/portfolio', portfolio);

module.exports = router