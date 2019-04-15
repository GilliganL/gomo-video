'use strict';

//import required modules
const express = require('express');
const  bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

//import config values
const { PORT } = require('./config');

//initialize a new express app
const app = express();

app.use(express.static('public'));

//Endpoint that accepts fragment data and returns uvt
app.post('/uvt', jsonParser, (req, res) => {

    console.log(req.body);
    //validate data

    //process videos 

    //return uvt data

})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));