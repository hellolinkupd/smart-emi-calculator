// ==========================================================
// SMART EMI CALCULATOR
// Loan Affordability
// Version: 5.0.0
// ==========================================================

// ----------------------------------------------------------
// Calculate Affordability
// ----------------------------------------------------------

function calculateAffordability() {

    if (!hasValidEMI()) {
        return;
    }

    const data = getEMIData();

    const result = $("affordabilityResult");

    if (!result) {
        return;
    }

    const recommendedIncome = data.emi * 3;

    let rating = "";
    let cssClass = "";

    if (data.emi <= recommendedIncome * 0.30) {

        rating = "Excellent";

        cssClass = "excellent";

    }

    else if (data.emi <= recommendedIncome * 0.40) {

        rating = "Good";

        cssClass = "good";

    }

    else if (data.emi <= recommendedIncome * 0.50) {

        rating = "Average";

        cssClass = "average";

    }

    else {

        rating = "High Risk";

        cssClass = "danger";

    }

    updateAffordability(
        recommendedIncome,
        rating,
        cssClass
    );

}

// ----------------------------------------------------------
// Update Affordability Display
// ----------------------------------------------------------

function updateAffordability(income, rating, cssClass) {

    const result = $("affordabilityResult");

    if (!result) {
        return;
    }

    result.innerHTML = `

        <div class="affordability-card ${cssClass}">

            <h3>
                Affordability Assessment
            </h3>

            <p>

                <strong>Recommended Monthly Income:</strong><br>

                ${formatMoney(income)}

            </p>

            <p>

                <strong>Affordability Rating:</strong><br>

                ${rating}

            </p>

            <p>

                Financial experts generally recommend keeping your total monthly loan payments below
                <strong>30%–40%</strong> of your monthly income for comfortable repayment.

            </p>

        </div>

    `;

}