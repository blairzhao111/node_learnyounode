
var http = require('http'),
	url1 = process.argv[2],
	url2 = process.argv[3],
	url3 = process.argv[4];

//counting finish work and queue the work is sometimes important and useful in asynchronous programming
var contentlist = [],
	num = 0;


http.get(url1,function(response){
	var contents="";
	response.setEncoding("utf8");

	response.on("data",function(data){
		contents += data;
	});

	response.on("error",function(err){
		console.error("There is an error:"+err);
	});

	response.on("end",function(){
		contentlist[0] = contents;
		num++;
		printout();
	});

});


http.get(url2,function(response){
	var contents="";
	response.setEncoding("utf8");

	response.on("data",function(data){
		contents += data;
	});

	response.on("error",function(err){
		console.error("There is an error:"+err);
	});

	response.on("end",function(){
		contentlist[1] = contents;
		num++;
		printout();
	});

});


http.get(url3,function(response){
	var contents="";
	response.setEncoding("utf8");

	response.on("data",function(data){
		contents += data;
	});

	response.on("error",function(err){
		console.error("There is an error:"+err);
	});

	response.on("end",function(){
		contentlist[2] = contents;
		num++;
		printout();
	});

});

var printout = function(){
	if(num===3){
		for(var i=0;i<3;i++){
			console.log(contentlist[i]);
			}
		}
};



