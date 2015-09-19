//version 1 
var http = require('http'),
    port = Number(process.argv[2]);

var server = http.createServer(function(request,response){
	if(request.method==="POST"){
		request.setEncoding('utf8');
		var body="";
		request.on('data',function(data){
			body += data.toString().toUpperCase();
		}).on('end',function(){
			response.writeHead(200,{'content-type':'text/plain'});
			response.end(body);
		}).on('error',function(err){
			console.error(err);
		});
    } 
    else {
    	response.end("Please use a POST to send request.\n");
    }  

});

server.listen(port);

//version 2 
//through2-map module(third party) allows you to create a transform streamusing only a single function
//that takes a chunk of data, do some transformation to it, and returns a chunk of data.
//it's like:
//var map = require('through2-map');
//inStream.pipe(map(function(chunk){
//	return chunk.toString().split('').reverse().join('');
//})).pipe(outStream);
var http = require('http'),
	map = require('through2-map'),
	  port = Number(process.argv[2]);

//both request and response objects are Node Stream object
var server = http.createServer(function(request,response){
	//request.method tells you which method request is using
	if(request.method =="POST"){
		request.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(response);

	}
	else {
		response.end("Please use POST to send your request.\n");
	}

});

server.listen(port);