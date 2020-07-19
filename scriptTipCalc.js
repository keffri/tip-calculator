tipCalculator = () => {
  let calcInput = document.getElementsByClassName("input-box");
  let billInput = calcInput[0].value;
  let tipInput = calcInput[1].value;
  let tipPercentage = tipInput / 100;
  let tip = billInput * tipPercentage;
  let billTotal = +billInput + +tip;
  document.getElementById(
    "tip-amount"
  ).innerHTML = `Your tip is: $${tip.toFixed(2)}`;
  document.getElementById(
    "bill-total"
  ).innerHTML = `Your bill total is: $${billTotal.toFixed(2)}`;
};

document.getElementById("calculate").addEventListener("click", tipCalculator);

calcReset = () => {
  document.getElementById("input-form").reset();
  document.getElementById("tip-amount").innerHTML = `Your tip is: $0.00`;
  document.getElementById("bill-total").innerHTML = `Your bill total is: $0.00`;
};

document.getElementById("reset").addEventListener("click", calcReset);
