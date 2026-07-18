// ==========================================================
// SMART EMI CALCULATOR
// Main Application
// Version: 4.0.0
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Smart EMI Calculator Started");

    // Detect visitor currency
    detectCurrency();

    // Calculator inputs
    const amount = $("amount");
    const rate = $("rate");
    const tenure = $("tenure");

    // Calculate on every change
    if (amount)
        amount.addEventListener("input", calculateEMI);

    if (rate)
        rate.addEventListener("input", calculateEMI);

    if (tenure)
        tenure.addEventListener("input", calculateEMI);

    // First calculation
    calculateEMI();

});