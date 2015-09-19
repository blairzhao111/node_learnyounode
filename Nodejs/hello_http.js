var http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/pain'});
	res.end("Hello http");
});

server.listen(8000);

console.log("Server started on localhost:8000;press Ctrl-C to terminate.....");