
var fs = require('fs');

//Synchronous IO, always with Sync ending. Returning a buffer object containing information 

var buffer = fs.readFileSync(process.argv[2]);
var lines = buffer.toString().split('\n').length-1;
console.log(lines);


//Asynchronous IO. Using a callback function as an argument, which means anytime reading file operation is finished, just call me(callback function)
//Node.js callbacks normally have the signature like function callback (err, data) {} 
//if an error occurs, err argument turns truthy.
//retruning buffer(data) object is another argument passed into callbacks
//actually you can use utf8 as seconf argument and then returning data object is a string, which is like function(err,utf8,data){......}

fs.readFile(process.argv[2], function(err,data){
	if(err) return;
	var contents = data;
	var lines = contents.toString().split('\n').length-1;
	console.log(lines);
});


