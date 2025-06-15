const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const result = document.getElementById("result");
const button = document.getElementById("calculateBtn");
const updateResult = document.getElementById("updateResult");

// Both input's but be filled with valid input to enable button
function checkInputs() {
  button.disabled = true;
  if (billInput.value.trim() !== "" && tipInput.value.trim() !== "") {
    button.disabled = false;
  }
}

billInput.addEventListener("keyup", checkInputs);
tipInput.addEventListener("keyup", checkInputs);

// Auto updates text as the user input value in the bill input
function updateResultText() {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  if (billInput.value.trim() !== "" && tipInput.value.trim() !== "") {
    const tip = bill * (tipPercent / 100);
    const total = bill + tip;
    updateResult.textContent = "Total = RM " + total.toFixed(2);
  }
}

billInput.addEventListener("keyup", updateResultText);
tipInput.addEventListener("keyup", updateResultText);

button.addEventListener("click", function () {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    result.textContent = "Please enter valid numbers.";
    result.style.color = "red";
    return;
  }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  // bill 200, tip: 10% -> 220
  console.log(total);

  result.textContent = `Tip: RM${tip.toFixed(2)} | Total: RM${total.toFixed(
    2
  )}`;

  //   result.textContent =
  //     "Tip: RM " + tip.toFixed(2) + " | Total: RM " + total.toFixed(2);
});
