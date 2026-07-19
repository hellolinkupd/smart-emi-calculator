// ==========================================================
// SMART EMI CALCULATOR
// MAIN APPLICATION
// Version: 4.1.0
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Smart EMI Calculator Started");

    // -----------------------------
    // Detect Currency
    // -----------------------------
    detectCurrency();

    // -----------------------------
    // Read URL Parameters
    // -----------------------------
    loadFromURL();

    // -----------------------------
    // Load Loan Configuration
    // -----------------------------
    loadLoanConfig(currentLoanType);

    // -----------------------------
    // Load FAQ
    // -----------------------------
    loadFAQ();

    // -----------------------------
    // Calculate EMI
    // -----------------------------
    calculateEMI();

    // -----------------------------
    // Event Listeners
    // -----------------------------

    if ($("amount")) {
        $("amount").addEventListener("input", calculateEMI);
    }

    if ($("rate")) {
        $("rate").addEventListener("input", calculateEMI);
    }

    if ($("tenure")) {
        $("tenure").addEventListener("change", calculateEMI);
    }

});