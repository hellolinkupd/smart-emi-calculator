// ==========================================================
// SMART EMI CALCULATOR
// EMI Calculator
// Version: 5.0.0
// ==========================================================

// ----------------------------------------------------------
// Calculate EMI
// ----------------------------------------------------------

function calculateEMI() {

    const amountInput = $("amount");
    const rateInput = $("rate");
    const tenureInput = $("tenure");

    if (!amountInput || !rateInput || !tenureInput) {
        return;
    }

    const principal = toNumber(amountInput.value);
    const annualRate = toNumber(rateInput.value);
    const years = toNumber(tenureInput.value);

    if (principal <= 0 || annualRate <= 0 || years <= 0) {

        updateResults(0, 0, 0);

        return;

    }

    const monthlyRate = annualRate / 12 / 100;

    const months = years * 12;

    const emi =
        principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;

    const totalInterest = totalPayment - principal;

    // Save latest calculation

emiData.principal = principal;

emiData.annualRate = annualRate;

emiData.years = years;

emiData.months = months;

emiData.monthlyRate = monthlyRate;

emiData.emi = emi;

emiData.totalInterest = totalInterest;

emiData.totalPayment = totalPayment;

    updateResults(
        emi,
        totalInterest,
        totalPayment
    );
    
updateURL();
}

// ----------------------------------------------------------
// Update Result Cards
// ----------------------------------------------------------

function updateResults(emi, interest, total) {

    if ($("emi")) {
        $("emi").textContent = formatMoney(emi);
    }

    if ($("interest")) {
        $("interest").textContent = formatMoney(interest);
    }

    if ($("total")) {
        $("total").textContent = formatMoney(total);
    }

    // Keep other modules synchronized

    if (typeof generateAmortizationSchedule === "function") {
        generateAmortizationSchedule();
    }

    if (typeof calculateAffordability === "function") {
        calculateAffordability();
    }

    if (typeof updateCharts === "function") {
        updateCharts();
    }

}

// ----------------------------------------------------------
// Current Calculation
// ----------------------------------------------------------

let emiData = {

    principal: 0,

    annualRate: 0,

    years: 0,

    months: 0,

    monthlyRate: 0,

    emi: 0,

    totalInterest: 0,

    totalPayment: 0

};

// ----------------------------------------------------------
// Get Current EMI Data
// ----------------------------------------------------------

function getEMIData() {

    return {

        principal: emiData.principal,

        annualRate: emiData.annualRate,

        years: emiData.years,

        months: emiData.months,

        monthlyRate: emiData.monthlyRate,

        emi: emiData.emi,

        totalInterest: emiData.totalInterest,

        totalPayment: emiData.totalPayment

    };

}

// ----------------------------------------------------------
// Check if EMI is Calculated
// ----------------------------------------------------------

function hasValidEMI() {

    return emiData.emi > 0;

}