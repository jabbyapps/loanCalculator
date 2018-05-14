// Listen for submit
document.getElementById("loan-form").addEventListener("submit", function(e){

  // Hide results
  document.getElementById("results").style.display = 'none';

  // Show loading
  document.getElementById("loading").style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

//Calculate Results
function calculateResults() {
  console.log("Calculating...")
  // UI variables - start naming UI variables differently. ie. ui_var
  const ui_amount = document.getElementById("amount");
  const ui_interest = document.getElementById("interest");
  const ui_years = document.getElementById("years");
  const ui_monthlyPayment = document.getElementById("monthly-payment");
  const ui_totalPayment = document.getElementById("total-payment");
  const ui_totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(ui_amount.value);
  const calculatedInterest = parseFloat(ui_interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(ui_years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest) / (x-1);

  if(isFinite(monthly)) {
    ui_monthlyPayment.value = monthly.toFixed(2);
    ui_totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    ui_totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    document.getElementById("results").style.display = 'block';

    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers.");
  }

}

// Show Error
function showError(error){
  // Hide results
  document.getElementById("results").style.display = "none";

  // Hide loading
  document.getElementById("loading").style.display = "none";


  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);

}

// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}