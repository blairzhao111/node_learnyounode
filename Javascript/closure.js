//use javascript closure to create an object with private variabels.
//EXAMPLE1:
//we are not assigning a function to myObject, we are assigning the result of invoking that function, which returns an object literal.
//the entire function literal acts like an object factory function, the members within function but out of that returning object literal play 
//a role like private member and members within that object literal are acting like public members.
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


//test EXAMPLE1
myObject.increment(5);
console.log(myObject.getValue());

try {
	myObject.increment("awesome");
}catch(err){
	console.log(err.name+" : "+err.message);
}

//EXAMPLE2:
//create a maker function called maker. It makes an object with a getter and setter method and a private property.
var maker = function(first_status){
	var status = first_status;
	return {
		get_status : function(){
			return status;
		},
		set_status : function(sta){
			status = (typeof sta === 'string' ? sta : status);
		}
	};
};

var myMaker1 = maker("initialStatus");
var myMaker2 = maker("second");

//test EXAMPLE2
console.log(myMaker1.status);
console.log(myMaker1.get_status());
myMaker1.set_status("awesome");
console.log(myMaker1.get_status())
console.log(myMaker2.get_status());
