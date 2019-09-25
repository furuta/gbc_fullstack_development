'use strict';

const express = require("express");
const app = express();

app.use('/js', express.static('./node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static('./node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static('./node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/', express.static(__dirname + '/src/'));

let server = app.listen(3001, () => console.log("Node.js is listening to URL: http://localhost:" + server.address().port) );





