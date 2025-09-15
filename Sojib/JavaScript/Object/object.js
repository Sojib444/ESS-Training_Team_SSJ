function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log("My father is " + myFather.firstName);
console.log("My mother is " + myMother.firstName);


// Adding a property to an object constructor
function Person1(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

const myMother1 = new Person1("Sally", "Rally", 48, "green");
console.log("My mother's nationaly  is " + myMother1.nationality);




Person.prototype.nationality = "Bengali";
console.log("My father is " + myFather.nationality);


Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

console.log("My father is " + myFather.name());

//JavaScript Object.assign()


// Create Target Object
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person3 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person2, person3); 

console.log(person2.firstName); // Outputs: Anne
console.log(person2.lastName);


//JavaScript Object.entries()

const Car = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let CarBrand = Object.entries(Car);
console.log(CarBrand);


const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "\n";
}
console.log(text);


const myMap = new Map(Object.entries(fruits));
console.log(myMap);



//JavaScript Object.fromEntries()
console.log(Object.fromEntries(CarBrand));
console.log(Object.values(Car));


const Fall = [
  {name:"apples", quantity:300, price:10},
  {name:"bananas", quantity:500, price:5},
  {name:"oranges", quantity:200, price:8},
  {name:"kiwi", quantity:150, price:15}
];

// Callback function to Group Elements
function myCallback({ price }) {
  return price > 10 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(Fall, myCallback);
console.log(result);


//Grouping by Length of String
const animals = ['ant', 'bear', 'cat', 'dog', 'elephant'];

const grouped = Object.groupBy(animals, animal => animal.length);

console.log(grouped);


const manush = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Get the Keys
const keys = Object.keys(manush);
console.log(keys);


for (let x in manush) {
  console.log(manush[x]);
}


//Adding a new Property or changing a property
const person = {
  firstName: "John",
  lastName : "Doe",
};

Object.defineProperty(person, "lastName", {value : "NO"});
Object.defineProperty(person, "language", {value : "Bangla"},{enumerable:false});
console.log(person.lastName);

Object.defineProperty(person, "firstName", {writable:false});
person.firstName = "Moin";
console.log(person.firstName);

console.log(Object.keys(person)); 


console.log(Object.getOwnPropertyNames(person));



const object = {};
Object.defineProperty(object, "hidden", {
  value: 42,
  enumerable: false
});

object.visible = "hello";

console.log(Object.keys(object)); 

console.log(Object.getOwnPropertyNames(object));


//Create an object
const sobur = {firstName:"John", lastName:"Doe"};

// Define a getter
Object.defineProperty(sobur, "fullName", {
  get: function () {return this.firstName + " " + this.lastName;}
});

console.log(sobur.fullName);


// Define object
const obj = {counter:0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (i) {this.counter -= i;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;


// Create an object:
const abir = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  }
};

// Display data from the object using a getter:
console.log(abir.lang);
abir.lang = "en"; // Set language using setter
console.log(abir.lang); // Display data from the object using a getter



// Define object
const object2 = {counter : 0};

// Define setters and getters
Object.defineProperty(object2, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(object2, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(object2, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(object2, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(object2, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
object2.reset;
object2.add = 5;
object2.subtract = 1;
object2.increment;
object2.decrement;