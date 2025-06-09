console.log("Hello from external JS");

// Single line comment
/* 
    Multi
    Line
    Comment
*/

// JavaScript is a loosely type programming language
// VARIABLES
// var - it can redeclare and be updated
// let - cannot redeclare but can be updated
// const - cannot redeclare and cannot be updated

// hoisting - you are putting it at the top / global level

// DATA TYPES

// PRIMITIVE DATA TYPES
// string - may include alphanumeric characters it is enclosed by a single or double quote

let message = "Hello there";
console.log(message);

let friendName = "John";
console.log(message + " " + friendName);

// number - are used for computation and it should not enclosed in single or double quotes

let total = 0;
let item1 = 200;
let item2 = 300;
total = item1 + item2;
console.log(item1 + item2);
console.log(total);

// But what happens if we add a string to a number to string (type coercion)

console.log(1 + "2");
console.log(1 + 1 + "2");

// PEMDAS RULE
console.log(((5 + 8) * 4) / 2);

// boolean - represent true or false
// > greated than
// < less than

console.log(0 > 1);
console.log(5 < 2);
console.log(5 >= 5);

// null - the value null represent the intentional absence of any variable or object
let z = null;
console.log(z);

// NON-PRIMITIVE DATA TYPES

// OBJECT
let person = {
  name: "John Doe",
  age: 42,
  address: "Melaka MY",
  "x522-z1my": "secret message",
  0: "egg",
};

console.log(person);

console.log(person.name);
console.log(person["name"]);

console.log(person["x522-z1my"]);
console.log(person["0"]);

// ARRAY
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length); //tells you how long the item is

// to always get the last value;
console.log(fruits[fruits.length - 3]);

// PRIMITIVE DATA TYPES are immutable and it is pass by value

let a = 5;
let b = a;

a = 25;
console.log(b);

// NON PRIMITIVE DATA TYPES are mutable and it is pass by reference

let cars = ["tesla", "byd", "honda"];
console.log("Original Car List", cars);

let carsCopy = cars;
console.log("Cars Copy", carsCopy);

carsCopy[0] = "Proton";

console.log("==================");

console.log("Current cars copy: ", carsCopy);
cars[0] = "Perodua";
console.log("Current orig cars : ", cars);
console.log("Current cars copy: ", carsCopy);

const stuff = ["table", "ladder", "chair"];
console.log(stuff);

stuff[0] = "tumbler";
console.log(stuff);

// OPERATORS

// assignment operator
let p = 10;

// additional assignment operator ( += )
p += 2;
console.log(p); //12

let msg = "Hello";
msg += "World";
//msg = msg + "World"
console.log(msg);

//Subtraction assignment operator (-=)
p -= 3;
console.log(p); //9

//Multiplication assignemnt operator (*=)
p *= 4;
console.log(p); //36

//Division assignment operator (/=)
p /= 2;
console.log(p); //18

//Modulo assignment operator (%=) / remainder
p %= 3;
console.log(p); //0

/* EQUALITY OPERATOR (==)
returns true if both values are equal
if comparing numbers to a string, the number will be converted to a string
if comparing boolean, it will be converted to a number when compared to a number
*/

console.log("================EQUALITY OPERATOR================");

console.log(5 == 5); //true
console.log(5 == "5"); // true
console.log(5 == "20"); //false
console.log(1 == true); //true
console.log(0 == false); //true

console.log("================STRICT EQUALITY OPERATOR================");

/* STRICT EQUALITY ===
will only return true if both operands have the same data type and same value
*/

console.log(5 === "5"); //false

/* INEQUALITY OPERATOR != 'not equal' 
    if comparing something which is true it would be false.
*/

console.log(1 != 1); //false
console.log(5 != 20); //true

/*
STRICT INEQUALITY OPERATOR !== 'strictly not equal'
it will return true if both operands are strictly not equal (data type and value)
*/

console.log(1 !== 2); //true
console.log(1 !== 1); // false

//LOGICAL OPERATORS

// && AND OPERATOR both operands must be true then it returns else it will be false
let chocolate = true;
let vanilla = false;

console.log(chocolate && vanilla); //false

// || OR OPERATOR
//Can you buy me a chocolate ice cream OR a vanilla ice cream.
console.log(chocolate || vanilla); //true

// ! OPERATOR
let isAbsent = false;
console.log(!isAbsent); //true
