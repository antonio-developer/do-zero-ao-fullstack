const router = require('express').Router();
const Portfolio = require('../models/Portfolio');

// Create
router.post('/', async (req, res) => {
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPortfolio = await portfolio.save()
        res.json({
            sucess:true,
            data: savedPortfolio
        })
    }catch(err){
        res.json({
            sucess: false,
            message: err
        })
    }
})

// Read   
router.get('/', async (req, res) => {
    try{
        const portfolio = await Portfolio.find()
        res.json({
            sucess:true,
            data:portfolio
        }) 
    }catch(err){
        res.json({
            sucess:false,
            message:err
        })
    }  
});

router.get('/:slug', async (req, res) =>{
    try{
        const portfolio = await Portfolio.findOne({
            slug:req.params.slug
        })
        res.json({
            sucess:true,
            data:portfolio
        })
    }catch(err){
        res.json({
            success:false, 
            message:err
        })
    }
})
    
//Update
router.patch('/:slug', async (req, res) => {
    try {
        const updatePortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        },
        {
            title: req.body.title,
            description: req.body.description
        })

        res.json({
            sucess: true,
            updated: updatePortfolio.nModified
        })

    } catch (err) {
        res.json({
            success:false, 
            message:err
        })
    }
})

//Delete
router.delete('/:slug', async (req, res) => {
    
    try {
        const deletedPortifolio = await Portfolio.deleteOne({
        slug:req.params.slug
        });

        res.json({
            success: true, 
            deleted: deletedPortifolio.deletedCount
        })

    } catch (err) {
        res.json({
            success: false, 
            message: err
        })
    }
})

module.exports = router