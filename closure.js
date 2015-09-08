
//we are not assigning a function to myObject, we are assigning the result of invoking that function, which returns an object literal.
var myObject = (function(){
//variable value has function scope and is been closure by two inner functions: increment and getValue
//so,after invocation of outer function been executed immediately, these inner functions still keep access to that variable value.
	var value = 0;
//return an objectl literal containing two methods, and those methods continue to enjoy the privilege of access to the value.
	return {
		increment: function(inc){
			if(typeof inc === "number"){
				value += inc;
			}
			else {
				throw {
				'name' : 'TypeError',
				'message' : "function input needs to be a number"
				};
			}
		},
//becasue variable value is private to the myObject object, we can use getter and setter methods in javascript too.
		getValue: function(){
			return value;
		}
	};
//this is a useful technicque to make private variables in javascript.
}());


//test
myObject.increment(5);
console.log(myObject.getValue());

try {
	myObject.increment("awesome");
}catch(err){
	console.log(err.name+" : "+err.message);
}
