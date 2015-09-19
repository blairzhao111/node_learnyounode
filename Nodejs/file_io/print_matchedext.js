
var fs = require('fs');
var path = require('path');

var dirName = process.argv[2],
	ext = "."+ process.argv[3];

//fs.readir() is an asynchronous IO operation,it goes to the given directory and return an array of files stored inside that directory
//it takes two arguments, first is directory's name and second is a callback like function(err,list){}, which list is an array returned by previous IO operation

fs.readdir(dirName,function(err,list){

	for(var i=0;i<list.length;i++){

		//path.extname() gives you back the file's extension,like path.extname('index.html') will return '.html'
		//path.txname('awesome.js') would return '.js'
		
		if(path.extname(list[i])===ext){
			console.log(list[i]);
		};
	}

});