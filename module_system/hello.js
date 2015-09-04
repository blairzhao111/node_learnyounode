
//variables declared in the top-level belong to that module.
//exproted properties of this module can be used outside the module
//non-exported properties are private to that module.

var name = "Junwei(blair)";

//private to this module
var age = 23;

exports.world = function(){
	console.log("Hello World!");
};

exports.intro = function(){
	console.log("My name is "+this.name+" and I want to be a great programmer, I'm having node.js tutorial right now.");
};

exports.name = name;

