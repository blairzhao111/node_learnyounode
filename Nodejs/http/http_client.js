
var http = require('http'),
	url = process.argv[2];

//http.get() gives a response to its callback function ( function(response){....} ), this is different from common situations.
//response is a Node Stream object, it can be treated as an event emiter. Three common events are "data", "error", "end".

http.get(url,function(response){

	//this setEncoding() method can make "data" event emit data as Strings rather than standard Node buffer objects
	//you also can use toString() method on buffer object to convert data into strings
	response.setEncoding("utf8");


	//the "data" event is emitted when a chunk of data is available and can be processed.
	//you can attach eventlistener like this: eventemitter.on("event", function(argv){...function to handle event or event's data}).
	
	response.on("data",function(data){
		console.log(data);
	});

	//also attach eventlistener to "error" event
	response.on("error",fucntion(err){
		consoel.error("There is an error:"+err);
	});

});




