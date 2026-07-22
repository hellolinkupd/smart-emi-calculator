// ==========================================================
// SMART EMI CALCULATOR
// Main Application
// Version: 5.0.0
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Smart EMI Calculator Started");

    // ------------------------------------------------------
    // Detect Currency
    // ------------------------------------------------------

    detectCurrency();

    // ------------------------------------------------------
    // Read URL Parameters
    // ------------------------------------------------------

    loadFromURL();

    // ------------------------------------------------------
    // Validate Loan Type
    // ------------------------------------------------------

    if (!loanConfigs[currentLoanType]) {

        currentLoanType = "home";

    }

    // ------------------------------------------------------
    // Load Current Loan Configuration
    // ------------------------------------------------------

    loadSEO();

    loadFAQ();

    loadSchema();

    // ------------------------------------------------------
    // Set Default Values
    // ------------------------------------------------------

    const config = loanConfigs[currentLoanType];

    if ($("amount") && !$("amount").value) {
        $("amount").value = config.defaultAmount;
    }

    if ($("rate") && !$("rate").value) {
        $("rate").value = config.defaultRate;
    }

    if ($("tenure") && !$("tenure").value) {
        $("tenure").value = config.defaultTenure;
    }

    // ------------------------------------------------------
    // Initial Calculation
    // ------------------------------------------------------

    calculateEMI();

    // ------------------------------------------------------
    // Event Listeners
    // ------------------------------------------------------

    if ($("amount")) {

        $("amount").addEventListener("input", () => {

            calculateEMI();

            loadSEO();

        });

    }

    if ($("rate")) {

        $("rate").addEventListener("input", () => {

            calculateEMI();

            loadSEO();

        });

    }

    if ($("tenure")) {

        $("tenure").addEventListener("change", () => {

            calculateEMI();

            loadSEO();

        });

    }

    console.log("Application Ready");

});