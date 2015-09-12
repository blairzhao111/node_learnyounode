//use npm "split" module(need to install, not part of node core module) to split input vy newlines.
var split = require('split');

var through2 = require('through2');
var isEven = false;

//'split' will buffer chunks of newlines before you get them.
//after split function, transformation stream should receive separate events for each line even though all the data probably arrives on the same chunk.
var stream = through2(function write(line, _,next){
	
	if(isEven===true){
		this.push(line.toString().toUpperCase()+"\n");
		isEven = false;
	}
	else{
		this.push(line.toString().toLowerCase()+"\n");
		isEven = true;
	}
	next();
});

//first parse input data by newlines then passing parsed data to transformation stream for new phase operation.
process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
