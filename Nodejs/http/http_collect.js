
var http = require('http'),
	url = process.argv[2];

http.get(url,function(response){
	var contents="";

	response.setEncoding("utf8");

	response.on("data",function(data){
		contents += data;
	});

	response.on("error",function(err){
		console.error("There is an error:"+err);
	});

	//"end" event means this stream is finished, there is no further data to be transmitted.
	response.on("end",function(){
		console.log(contents.length);
		console.log(contents);
	});

});




