
//this instance is a single object, it will be created and cached when it's first loaded. So everytime when you use instance,
// you're referencing the same object!!!

module.exports.instance = {
	name : "",
	age : undefined,
	intro: function(){
		console.log("From instance: name:"+this.name+" age:"+this.age);
	}
};


//

module.exports.createPerson = function(name,age){
	//set up code goes here
	return {
		name : name,
		age : age,
		intro: function(){
			console.log("From createPerson: name:"+this.name+" age:"+this.age);
		}
	};
};

//this is a constructor form. In the file where is importing this Person module 

module.exports.Person = function(name,age){
	this.name = name;
	this.age = age;
	this.intro = function(){
		console.log("From Constructor: name:"+this.name+" age:"+this.age);
	};

};