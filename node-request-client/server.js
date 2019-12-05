/*Basic HTTP APP

// var http = require('http');

// http.createServer(function (req, res) { //create a server
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);
*/


const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req,res) => res.send("Hello World"));
app.listen(port, () => console.log(`Listening on port ${port}`));


