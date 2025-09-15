// Object

const person1 = {
    firstName: "Jahan",
    lastName: "Sumit",
    age: 29,
    fullName: function (){ return this.firstName + " " + this.lastName}
}

console.log("Name: " + person1.fullName());
console.log("Age: " + person1.age);


// Object.create()

const person2 = Object.create(person1);
person2.firstName = "Nur";
person2.lastName = "Nabi";
person2.age = 58;

console.log("Fater Name: " + person2.fullName());


//Object.fromEntries()

const fruits =[ 
["apples", 300],
["bananas", 400],
["pears", 500]
];

const obj = Object.fromEntries(fruits);
console.log(obj.pears);

const obj2 =  Object.fromEntries(fruits);
obj2.pears = 600;
console.log("from object 2: Pears - " + obj2.pears);


// Object.assign()

const p1 = {
    name : "Messi",
    age : 45,
    eyeColor : "blue"
};

const p2 = {
    name : "Ronaldo",
};

Object.assign(p1,p2);

console.log(p1);