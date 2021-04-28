const router = require('express').Router();


router.get('/portfolio', (req, res) => {
    // acess db
    const data = [{
        id: 1,
        name:'My first project',
        createdAt: '2020-01-01'
    },
    {
        id: 2,
        name:'My second project',
        createdAt: '2020-01-06'
    },
    {
        id: 3,
        name:'My other project',
        createdAt: '2020-01-25',
        salve: 'Agora está atualizando sem salvar'
    }
];

    res.json({
        "success":true,
        data: data
    });
});

module.exports = router