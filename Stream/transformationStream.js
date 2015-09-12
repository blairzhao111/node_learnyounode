//use npm "through2" module(need to install, not part of node core module) to act like a transform stream between two given streams.
//A transform stream takes input data from input stream and applies an operation to the data to produce the output data.
var through2 = require('through2');
//create a transformation stream with an optional 'write' and an optional 'end' function.
//var stream = through2(write, end);
//The 'write' function is called for every buffer of available input:
//Write function syntax is:
//function write (buffer, encoding, next){......}.
//The 'end' function is called when there is no more data:
//End function syntax is:
//function end () {....}
var stream = through2(function write(buffer,utf8,next){
	//inside the write function,call this.push() to produce output data and call next() when you're ready to receive the next hunk of data.
	this.push(buffer.toString().toUpperCase());
	//convert a buffer to string by using toString();
	next();
},function end(done){
	//inside end function, call done() to finish the output.
	done();
});
//if write is not specified, the default implementation passes the input data to the output unmodified.
//if end is not specified, the default implementation calls this.push(null) to close the output side when the inputs side ends.

//using pipe function to pipe data between two streams.
//StreamOne.pipe(StreamTwo);
//in this case, we pipe data from input stream to transformation stream, modify the data, then pipe modified data from tranformation stream to output stream.
process.stdin.pipe(stream).pipe(process.stdout);
