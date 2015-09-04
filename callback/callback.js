
// the callback is a placeholder for impending passin function.

var someFunction = function(argv,callback){
	var data; 

	//current writting one is an asynchronous function, which means when operations needed to be done are finished,next thing is to call the callback function
	//callback is a function with a syntax like function(err,data){};

	//do some things with data,could be IO, network stuffs.

	//if any error happens, end function immediately and return error to the following callback function 
	if(err) return callback(err);
	else 
	//continue to do some operations

	//if there is no error,return calculated data, means pass result to the callback function.
	callback(null,data)
};

//an example calling someFunction function
//below is an invocation, first argument is the passin data, second argument is a callback function.
//the callback(function) appears above is equal to function(err,data){} below.

someFunction("bla bla bla", function(err,data){

	//some further actions performed on passin data

});