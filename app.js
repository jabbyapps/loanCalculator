// Listen for submit
document.getElementById("loan-form").addEventListener("submit", calculateResults);

//Calculate Results
function calculateResults(e) {
  console.log("Calculating...")
  // UI variables - start naming UI variables differently. ie. ui_var
  const ui_amount = document.getElementById("amount");
  const ui_interest = document.getElementById("interest");
  const ui_years = document.getElementById("years");
  const ui_monthly_payment = document.getElementById("monthly-payment");
  const ui_totalPayment = document.getElementById("total-payment");
  const ui_totalInterest = document.getElementById("total-interest");


  e.preventDefault();
}