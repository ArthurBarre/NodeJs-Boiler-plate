/*
import server modules
*/

//Class
require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const path = require('path');

// Modules serveur
const frontRoutes = require('./routes/front.routes');
const apiRoutes = require('./routes/api.routes');
/*
Server configuration
*/

//Define the server's variables
const server = express();
const port = process.env.PORT;


server.set('views', __dirname + '/www');

server.use(express.static(path.join(__dirname, 'www')));

server.set('view engine', 'ejs');

server.use('/api', apiRoutes)
server.use('/', frontRoutes);

server.listen(port, () => console.log(`Server is launched on poort ${port}`))