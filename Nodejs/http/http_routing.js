
var http = require('http');

//to the server, a http request is an event
http.createServer(function(req,res){

	//only parse path, omit querystring 
	var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
	switch(path){
		case '':
				res.writeHead(200,{'Content-Type':'text/plain'});
				res.end("HomePage");
				break;
		case '/about':
				res.writeHead(200,{'Content-Type':'text/plain'});
				res.end("About");
				break;
		default:
				res.writeHead(404,{'Content-Type':'text/plain'});
				res.end("Not Found");
				break;
	}

}).listen(8000);

console.log("Server started on localhost:8000....");