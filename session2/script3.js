document.getElementById("heading").style.color = "blue";

console.log(document.getElementsByClassName("second"));

let headings = document.getElementsByClassName("second");

for (let h2 of headings) {
  h2.style.color = "red";
}

// let headings = document.getElementsByClassName("second");

// console.log(document.getElementsByClassName("second"));
// console.log(document.querySelectorAll(".second"));

let ul = document.getElementById("fruits");
let addBtn = document.getElementById("addFruit");

// addBtn.addEventListener("click", function())

let orig = document.getElementById("orig");
let para = document.getElementById("para");
let textChange = document.getElementById("textChange");
let hidePara = document.getElementById("hidePara");

textChange.addEventListener("click", function () {
  orig.innerText = "Updated Heading";
});

para.addEventListener("mouseover", function () {
  para.style.color = "purple";
});

hidePara.addEventListener("click", function () {
  para.style.display = "none";
});
