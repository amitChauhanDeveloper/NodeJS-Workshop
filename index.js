const express = require('express'); // import express from npm
const bodyParse = require('body-parser'); //import bodyParser from npm
const cors = require('cors'); // import cors from npm

const route = require('./src/routes');

const app = express(); // make an instance of express
app.use(cors()); // use middleware of cors // it will resolved the issue for restric APIs
app.use(bodyParse.urlencoded({ extended: false })); //use of body-parser for url encoded
app.use(bodyParse.json());

// set base of route
app.use('/',route);

// create a server
// we have to define port for server
app.listen(9000, () =>{
    console.log('Server is running on port 9000');
})

module_exports = app;