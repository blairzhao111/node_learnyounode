
var http = require('http'),
    fs = require('fs');

//helper function to write proper data to the response object.
var serveStaticFile = function(res,path,contentType,responseCode){
	//default http response code is 200, indicates request was successful.
	responseCode = responseCode || 200;
	//if the file doesn't or there is a permission issue reading file, an err is set
	//__dirname is the name of the directory that the currently executing script resides in.
	//it actual isn't global but rather local to each module.
	fs.readFile(__dirname+path, function(err,data){
		if(err) {
			res.writeHead(500, {'Content-Type':'text/plain'});
			res.write("500 - Internal Error");
		} else{
			res.writeHead(responseCode,{'Content-Type':contentType});
			res.end(data);
		}
	});
};

http.createServer(function(req,res){
	//path the url, in this case ignore any querystring
	var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
	//based on parsed path, route to corresponding static file.
	switch(path){
		case '':
				serveStaticFile(res,'/public/index.html','text/html');
				break;
		case '/index':
				serveStaticFile(res,'/public/index.html','text/html');
				break;
		case '/about':
				serveStaticFile(res,'/public/about.html','text/html');
				break;
		case '/img/logo.jpg':
				serveStaticFile(res,'/public/img/logo.jpg','img/jpeg');
				break;
		default:
				serveStaticFile(res,'/public/404.html','text/html',404);
				break;
	}

}).listen(8000);

console.log("Server started on localhost:8000, use Ctrl-C to terminate....");