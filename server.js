'use strict';

//import required modules
const express = require('express');
const  bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

//initialize a new express app
const app = express();

//import config values
const { PORT } = require('./config');

//Endpoint that accepts fragment data and returns uvt
app.post('/uvt', jsonParser, async (req, res) => {

    //validate data

    //process videos 

    //return uvt data

})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));