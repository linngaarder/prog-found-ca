// Question 1

var name = "Stella";

// Question 2

var person {
    name: "Stella",
    age: 20
};

// Question 3

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// Question 4

var numbers = [2,4,6,8,10];

for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    console.log(num);
}

// Question 5

for (var i = 15; i <=25; i++) {
    console.log(i)
}

// Question 6

if (i === 20) {
    console.log("equal to 20");
}
else {
    console.log("not equal to 20")
}

// Question 7

var car1 = {
    brand: "ford fiesta",
    seats: 5,
    automatic: true
}

var car2 = {
    brand: "ford s max",
    seats: 7,
    automatic: false
}

var cars = [car1,car2]

for (var i = 0; i < cars.length; i++) {
    var item = cars[i];
    console.log (item.seats);
    console.log (item.automatic);
}

// Question 8

function whatIDontLike(item) {
    console.log("I don't like " + item);
}

whatIDontLike("Onions");

// Question 9

function subtract(num1,num2) {
    return num1 - num2;
}

console.log(subtract(10,2));

// Question 10

var myArray [];

function groceries(word) {
    console.log(word);
    myArray.push(word);
    }

    groceries("carrots");