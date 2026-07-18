// ==========================================================
// SMART EMI CALCULATOR
// Utility Functions
// Version: 4.0.0
// ==========================================================

// Currency
let currentCurrency = "INR";
let currentSymbol = "₹";

// Detect visitor currency
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
        locale.includes("it") ||
        locale.includes("es")
    ) {
        currentCurrency = "EUR";
        currentSymbol = "€";
    }

    else {
        currentCurrency = "INR";
        currentSymbol = "₹";
    }
}

// Format Currency
function formatMoney(value) {

    return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currentCurrency,
        maximumFractionDigits: 0
    }).format(value);

}

// Format Number
function formatNumber(value) {

    return new Intl.NumberFormat().format(value);

}

// Get Element
function $(id) {

    return document.getElementById(id);

}

// Round Value
function round(value, decimals = 2) {

    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);

}