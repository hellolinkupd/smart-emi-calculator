// ==========================================================
// SMART EMI CALCULATOR
// Amortization Schedule
// Version: 5.0.0
// ==========================================================

// ----------------------------------------------------------
// Generate Amortization Schedule
// ----------------------------------------------------------

function generateAmortizationSchedule() {

    if (!hasValidEMI()) {
        return;
    }

    const data = getEMIData();

    const tableBody = $("amortizationBody");

    if (!tableBody) {
        return;
    }

    tableBody.innerHTML = "";

    let balance = data.principal;

    for (let month = 1; month <= data.months; month++) {

        const interest = balance * data.monthlyRate;

        const principal = data.emi - interest;

        balance -= principal;

        if (balance < 0) {
            balance = 0;
        }

        addAmortizationRow(
            tableBody,
            month,
            data.emi,
            principal,
            interest,
            balance
        );

    }

}

// ----------------------------------------------------------
// Add Amortization Table Row
// ----------------------------------------------------------

function addAmortizationRow(
    tableBody,
    month,
    emi,
    principal,
    interest,
    balance
) {

    const row = document.createElement("tr");

    row.innerHTML = `

        <td>${month}</td>

        <td>${formatMoney(emi)}</td>

        <td>${formatMoney(principal)}</td>

        <td>${formatMoney(interest)}</td>

        <td>${formatMoney(balance)}</td>

    `;

    tableBody.appendChild(row);

}