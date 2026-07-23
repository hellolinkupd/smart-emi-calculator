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
    // ======================================================
// Language Selector
// ======================================================

const languageSelector = $("languageSelector");

if (languageSelector) {

    languageSelector.addEventListener("change", function () {

        const select = document.querySelector(".goog-te-combo");

        if (select) {

            select.value = this.value;
            select.dispatchEvent(new Event("change"));

        }

    });

}

// ======================================================
// Mobile Menu
// ======================================================

const menuButton = $("menuToggle");

const menu = document.querySelector(".main-nav");

if(menuButton && menu){

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}

// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("show");

    });

}

// ==========================
// Dark Mode
// ==========================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        themeToggle.textContent = "☀️";

    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const dark = document.body.classList.contains("dark");

        themeToggle.textContent = dark ? "☀️" : "🌙";

        localStorage.setItem("theme", dark ? "dark" : "light");

    });

}

// ==========================
// Back To Top
// ==========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    backToTop.classList.toggle("show", window.scrollY > 300);

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

    console.log("Application Ready");

});