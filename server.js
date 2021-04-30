const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// console.log("Nome do banco de dados do MongoDB", process.env.MONGO_DB)
// console.log("Nome do usuario MongoDB:", process.env.MONGO_USER)

const api = require('./backend/routes')

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        "success":true
    });
});

//  /api

app.use('/api', api)

const PORT = process.env.PORT;
app.listen(PORT);
