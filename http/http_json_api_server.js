
//Node core has an 'url' module, method core_url.parse(request.url,trur) will parse content of request.url
//and provide you with an object with helpful properties.
//For example,on the command prompt, try: $ node -pe "require('url').parse('/test?q=1',true)" to check more details.
var http = require('http'),
	url_core = require('url'),
	port = Number(process.argv[2]);

var server = http.createServer(function(request,response){
	if(request.method=="GET"){

//the request object has an url property(request.url) will contain the url sending by client's request
		var parsed_url = url_core.parse(request.url,true);
		//query is a property of returned object by url.parse() method.
		var coming_time = parsed_url.query.iso;

//Javascript Date object can print dates in ISO format, e.g. new Date().toISOString().
//It can also parse this format if you pass the string into the Date constructor, which means you can parse an ISO format date and get a normal date object back
		var date = new Date(coming_time);

		//pathname is another property of returned object by url.parse() method.
		if(parsed_url.pathname == "/api/parsetime"){
			response.writeHead(200,{'Content-Type':'application/json'});
			var time_array = [date.getHours(),date.getMinutes(),date.getSeconds()];

//use JSON.stringify(jsondata) to change json into string format
			response.end(JSON.stringify(
			{
				"hour": time_array[0],
				"minute": time_array[1],
				"second": time_array[2]
			}
				));
		}
		else if(parsed_url.pathname == "/api/unixtime"){
			response.writeHead(200,{'Content-Type':'application/json'});

//use getTime() method on a Date object will give you back time in unixtime format 
			var unixtime = date.getTime();
			response.end(JSON.stringify(
				{"unixtime": unixtime}
				));
		}

	}
	else {
		response.end("Please Send a GET request.\n");
	}

});

server.listen(port);