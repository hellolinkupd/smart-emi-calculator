// ==========================================================
// SMART EMI CALCULATOR
// Amortization Schedule
// Version: 4.0.0
// ==========================================================

function generateAmortizationSchedule(principal, annualRate, years) {

    principal = parseFloat(principal);
    annualRate = parseFloat(annualRate);
    years = parseFloat(years);

    if (
        principal <= 0 ||
        annualRate <= 0 ||
        years <= 0
    ) {
        return [];
    }

    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    const emi =
        principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);

    let balance = principal;

    const schedule = [];

    for (let month = 1; month <= months; month++) {

        const interest = balance * monthlyRate;

        const principalPaid = emi - interest;

        balance -= principalPaid;

        schedule.push({

            month,

            emi: Math.round(emi),

            principal: Math.round(principalPaid),

            interest: Math.round(interest),

            balance: Math.max(0, Math.round(balance))

        });

    }

    return schedule;

}