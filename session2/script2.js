let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]);
console.log(fruits.length); // length of the fruits array
console.log(fruits[0].length); //lenght of the string of the first item

console.log(fruits);
fruits.push("Papaya");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Kiwi");
console.log(fruits);

// FOR LOOP
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// forEach is a method for an array to iterate on the given list
// fruits.forEach(function (fruit, i) {
//   console.log(fruit, i);
// });

// // for of loop
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// Filter method
// let newFruits = fruits.filter(function (fruit) {
//   return fruit.length >= 5;
// });

// Filter method using arrow funtions
let newFruits = fruits.filter((fruit) => fruit.length >= 5);

console.log(newFruits);

let post = {
  title: "Hello",
  tags: ["intro", "welcome"],
  author: {
    name: "Howie",
    age: 30,
  },
};

console.log(post.author.name);

console.log(post.tags[1]);

/* MiniActivity
1. Create an array of 5 of your favorite movies.
2. Log the first and last movie
3. Use push() to add one, and pop() to remove one.
5. Create an object profile with your name, age, and an array of 3 hobbies.
6. Log your second hobby.
*/

let movies = [
  "Godfather",
  "Star Wars",
  "Lord of the rings",
  "Inception",
  "Top Gun",
];

console.log(movies[0]);
console.log(movies[movies.length - 1]);

movies.push("V for Vendetta");
// console.log(movies);

movies.pop();
// console.log(movies);

let profile = {
  name: "Azfar",
  age: 29,
  hobbies: ["Games", "Hiking", "Camping"],
};

console.log(profile.hobbies[1]);
