/*
if - else syntax

if(condition) {
    //the code here will execute if the condition is true
} else {
    // the code here will execute if false
}
*/
let trafficStop = "yellow";

if (trafficStop === "green") {
  console.log("You can go");
} else if (trafficStop === "yellow") {
  console.log("you should slow down");
} else {
  console.log("You should stop!");
}

// let dbUsername = "johndoe123";
// let dbPassword = "12345678";

// let inputUsername = prompt("Type your username");
// let inputPw = prompt("Type your password");

// if (dbUsername === inputUsername && dbPassword === inputPw) {
//   alert("Login Sucessfully");
// } else {
//   alert("INTRUDER!!!");
// }

// let inputUsername = prompt("Type your username");
// let inputPw = prompt("Type your password");

// if (dbUsername === inputUsername && dbPassword === inputPw) {
// 	alert("login successfully");
// } else {
// 	alert("Wrong credentials");
// }

// ternary operator (shorthand for if else) - yes or no
// condition ? true : false
let age = 42;

if (age > 18) {
  console.log("you can enter");
} else {
  console.log("block");
}

age > 18 ? console.log("you can enter") : console.log("block");

// trafficStop === "green"
// 	? console.log("you must go")
// 	: trafficStop === "blue"
// 	? console.log("You should junmp")
// 	: trafficStop === "yellow"
// 	? console.log(" you should slow down")
// 	: console.log("You shou;d stop");
