// ==========================================================
// SMART EMI CALCULATOR
// EMI Calculator
// Version: 4.0.0
// ==========================================================

function calculateEMI() {

    const amountInput = $("amount");
    const rateInput = $("rate");
    const tenureInput = $("tenure");

    if (!amountInput || !rateInput || !tenureInput) return;

    const principal = parseFloat(amountInput.value) || 0;
    const annualRate = parseFloat(rateInput.value) || 0;
    const years = parseFloat(tenureInput.value) || 0;

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

    updateResults(emi, totalInterest, totalPayment);

}

function updateResults(emi, interest, total) {

    if ($("emi"))
        $("emi").textContent = formatMoney(emi);

    if ($("interest"))
        $("interest").textContent = formatMoney(interest);

    if ($("total"))
        $("total").textContent = formatMoney(total);

}