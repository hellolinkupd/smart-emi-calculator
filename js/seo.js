// ==========================================================
// SMART EMI CALCULATOR
// Dynamic SEO
// Version: 5.0.0
// ==========================================================

// ----------------------------------------------------------
// Update SEO
// ----------------------------------------------------------

function updateSEO() {

    const config = loanConfigs[currentLoanType];

    if (!config) {
        return;
    }

    // ------------------------------------------------------
    // Page Title
    // ------------------------------------------------------

    document.title = config.seoTitle;

    // ------------------------------------------------------
    // Meta Description
    // ------------------------------------------------------

    const metaDescription = document.querySelector(
        'meta[name="description"]'
    );

    if (metaDescription) {

        metaDescription.setAttribute(
            "content",
            config.metaDescription
        );

    }

    // ------------------------------------------------------
    // Canonical URL
    // ------------------------------------------------------

    const canonical = document.querySelector(
        'link[rel="canonical"]'
    );

    if (canonical) {

        canonical.href =
            window.location.origin +
            window.location.pathname +
            "?loan=" +
            currentLoanType;

    }

    // ------------------------------------------------------
    // Page Heading
    // ------------------------------------------------------

    if ($("pageTitle")) {

        $("pageTitle").textContent = config.h1;

    }

    // ------------------------------------------------------
    // Introduction
    // ------------------------------------------------------

    if ($("pageIntro")) {

        $("pageIntro").textContent = config.intro;

    }

}
// ----------------------------------------------------------
// Update Page Content
// ----------------------------------------------------------

function updatePageContent() {

    const config = loanConfigs[currentLoanType];

    if (!config) {
        return;
    }

    // ------------------------------------------------------
    // Loan Amount Label
    // ------------------------------------------------------

    if ($("amountLabel")) {

        $("amountLabel").textContent = config.amountLabel;

    }

    // ------------------------------------------------------
    // Loan Summary
    // ------------------------------------------------------

    if ($("loanIntro")) {

        $("loanIntro").textContent = config.intro;

    }

    // ------------------------------------------------------
    // Benefits
    // ------------------------------------------------------

    const benefitsList = $("benefitsList");

    if (benefitsList) {

        benefitsList.innerHTML = "";

        config.benefits.forEach(benefit => {

            const li = document.createElement("li");

            li.textContent = benefit;

            benefitsList.appendChild(li);

        });

    }

    // ------------------------------------------------------
    // Input Limits
    // ------------------------------------------------------

    if ($("amount")) {

        $("amount").min = config.minAmount;

        $("amount").max = config.maxAmount;

    }

    if ($("rate")) {

        $("rate").min = config.minRate;

        $("rate").max = config.maxRate;

    }

    // ------------------------------------------------------
    // Loan Details
    // ------------------------------------------------------

    if ($("loanTypeText")) {

        $("loanTypeText").textContent = config.name;

    }

    if ($("interestRateText") && $("rate")) {

        $("interestRateText").textContent =
            $("rate").value + "%";

    }

    if ($("loanTenureText") && $("tenure")) {

        $("loanTenureText").textContent =
            $("tenure").value + " Years";

    }

}

// ----------------------------------------------------------
// Load SEO
// ----------------------------------------------------------

function loadSEO() {

    updateSEO();

    updatePageContent();

}