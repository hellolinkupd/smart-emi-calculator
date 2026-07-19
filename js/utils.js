// ==========================================================
// SMART EMI CALCULATOR
// Utility Functions
// Version: 4.0.0
// ==========================================================

// Shortcut for document.getElementById()
function $(id) {
    return document.getElementById(id);
}

// ----------------------------------------------------------
// Detect visitor currency
// ----------------------------------------------------------

let currentCurrency = "INR";
let currentSymbol = "₹";

function detectCurrency() {

    const locale = navigator.language.toLowerCase();

    if (locale.includes("en-us")) {
        currentCurrency = "USD";
        currentSymbol = "$";
    }

    else if (locale.includes("en-gb")) {
        currentCurrency = "GBP";
        currentSymbol = "£";
    }

    else if (
        locale.includes("fr") ||
        locale.includes("de") ||
        locale.includes("es") ||
        locale.includes("it")
    ) {
        currentCurrency = "EUR";
        currentSymbol = "€";
    }

    else {
        currentCurrency = "INR";
        currentSymbol = "₹";
    }

}

// ----------------------------------------------------------
// Format Money
// ----------------------------------------------------------

function formatMoney(value) {

    return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currentCurrency,
        maximumFractionDigits: 0
    }).format(value);

}

// ----------------------------------------------------------
// Format Percentage
// ----------------------------------------------------------

function formatPercent(value) {

    return Number(value).toFixed(2) + "%";

}

// ----------------------------------------------------------
// Round Number
// ----------------------------------------------------------

function round(value, digits = 2) {

    return Number(value.toFixed(digits));

}