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
