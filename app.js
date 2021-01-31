const db = require('./config');
require('dotenv').config()
const express = require('express');

const app = express();

db.connect().then(() =>{
    console.log('done !!')
})

app.get('/', (req, res) => {
    db.query('select * from music').then((record) =>{
        const response = {
            statusCode : 200,
            body : record.rows
        }
        res.status(200).send(response);
    })
})


app.listen(process.env.PORT)