var person = require('./person');
var Person = person.Person;

var instance1 = person.instance;
instance1.name = "blair";
instance1.age = 23;
instance1.intro();

var person1 = person.createPerson("Kevin",20);
var person2 = person.createPerson("Ashley",25);

person1.intro();
person2.intro();

var con1 = new Person("Tim",22);
con1.intro();

var instance2 = person.instance;
instance2.intro();