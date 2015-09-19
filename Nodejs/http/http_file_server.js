//this is a  http file server, port number as first argument, file path as second argument,
//http.createServer() call creates a server than can talk HTTP and return an instance of it,
//http.createServer() call takes a callback function is called once fot each connection received by your server,
//the callback function is like: function callback(req,res) {.....},
//req is an object representing HTTP request and res is an object representing HTTP response
//request and response are also Node Stream, can be used to send and receive data 
var http = require('http'),
	fs = require('fs'),
    port = Number(process.argv[2]),
    file = process.argv[3];

var server = http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/plain'});

	//fs.createReadStream() method creates a stream object representing the file reading process, 
	//you can user sourceStream.pipw(destinationStream) to pipe the data from src stream to dst stream.
	var srcStream = fs.createReadStream(file);
	srcStream.pipe(res);

});

//attach server to a specific port
server.listen(port);
