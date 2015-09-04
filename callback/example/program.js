

var mymodule = require('./myModule'),
	dirName = process.argv[2],
	ext = process.argv[3];

//callback function's(pass to mymodule function) input is coming from results of mymodule invocation.
//no matter the result is error or data.

mymodule(dirName,ext,function(err,data){

	//do error detection ahead
	if(err) return console.error("There is an error:",err);

	//no error? use data and do awesome things
	for(var i=0;i<data.length;i++){
		console.log(data[i]);
    }

});




