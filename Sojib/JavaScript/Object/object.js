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