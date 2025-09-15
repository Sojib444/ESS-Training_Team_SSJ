const person1 = {
    firstName: "Jahan",
    lastName: "Sumit",
    age: 29,
    fullName: function (){ return this.firstName + " " + this.lastName}
}

console.log("Name: " + person1.fullName());
console.log("Age: " + person1.age);
