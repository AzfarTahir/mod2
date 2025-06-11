// FUNCTION AND SCOPE

// The parenthesis on the function declaration is what we call 'parameter/s'

// the parenthesis on the function call is what we call arguments/s
function sayHello(name, age) {
  console.log("Hello! " + name + " age " + age);
}

sayHello("John", 29);

function add(a, b) {
  return a + b;
}

let result = add(3, 4);
console.log(result);

// FUNCTION EXPRESSIONS
const multiply = function (a, b) {
  return a * b;
};

let result2 = multiply(4, 5);
console.log(result2);

// SCOPE DETERMINES WHERE VARIABLES ARE ACESSIBLE

let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}

testScope();

// MiniActivity
function squareNum(num) {
  return num * num;
}

console.log(squareNum(2)); //4
console.log(squareNum(6)); //12
console.log(squareNum(7)); //14

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4)); //true
console.log(isEven(5)); //false

let greet = (name) => console.log("Goodbye, " + name + "!");

greet("Azfar");

let printAge = (name, age) => console.log(name + " age is " + age);
printAge("Azfar", 29);
