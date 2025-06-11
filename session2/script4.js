const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const result = document.getElementById("result");
const button = document.getElementById("calculateBtn");

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
