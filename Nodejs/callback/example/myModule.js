
var fs = require('fs'),
	path = require('path');

//callback is a placeholder for actual coming in function, which is like function(err,data){....};

module.exports = function(dirName,ext,callback){

	fs.readdir(dirName,function(err,data){

		//if there is an error, pass it to the callback
		if(err) {return callback(err);}

		var list = [];
		for(var i=0;i<data.length;i++){
			if(path.extname(data[i])===("."+ext)){
				list.push(data[i]);
			}
		}

		//finish dealing with data, then call and pass data to the callback, also pass null in err slot, means error is falsey
		callback(null,list);
	});
};

