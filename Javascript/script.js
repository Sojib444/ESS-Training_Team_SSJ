console.log("welcome test");


class Product{

        constructor(name, price){
            this.name = name;
            this. price = price;
        }


        displayProduct(){
            console.log(`Product: ${this.name}`);
            console.log(`Price: ${this.price.toFixed(2)}`);

        }

        calculateTotal(){
            return this.price + (this.price * salesTax);
        }
}
const salesTax = 0.05;
const product1 = new Product("Apple", 100.00);

product1.displayProduct();

const total = product1.calculateTotal();
console.log(`Total Price is: $${total.toFixed(2)}`);

console.log(document);

testBack(testCallBack);

function testBack(callback){

    console.log("Callback executing");
    callback();
}

function testCallBack(){
    console.log("Call back executed");
}



const person1 = {
    firstName: "Jahan",
    lastName: "Sumit",
    age: 29
}

console.log("Name: " + person1.firstName + " " + person1.lastName);
console.log("Age: " + person1.age);


let arr =  [1,5,6,2,4,3];

let arr2 =  arr;
arr2 = arr2.sort();

console.log(arr);
console.log(arr2);