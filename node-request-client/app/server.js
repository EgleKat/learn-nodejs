/*Basic HTTP APP

// var http = require('http');

// http.createServer(function (req, res) { //create a server
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);
*/



const express = require('express');
const path = require('path');
const indexRouter = require("./routes/index");
const personRouter = require('./routes/person');
var bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));//specify the route of static files (html/css/js)
app.use("/", indexRouter);
app.use('/person', personRouter);



app.listen(port, () => console.log(`Listening on port ${port}`));

app.use((req,res,next) => res.status(404).send("404: Not Found"));  //specify what to do when 404 err happens

