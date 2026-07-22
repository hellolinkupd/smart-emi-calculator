// ==========================================================
// SMART EMI CALCULATOR
// Utility Functions
// Version: 5.0.0
// ==========================================================

// ----------------------------------------------------------
// DOM Shortcut
// ----------------------------------------------------------

function $(id) {
    return document.getElementById(id);
}

// ----------------------------------------------------------
// Currency
// ----------------------------------------------------------

let currentCurrency = "INR";
let currentSymbol = "₹";

// ----------------------------------------------------------
// Detect Currency
// ----------------------------------------------------------

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
// Format Percent
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

// ----------------------------------------------------------
// Safe Number
// ----------------------------------------------------------

function toNumber(value) {

    const number = parseFloat(value);

    return isNaN(number) ? 0 : number;

}

// ----------------------------------------------------------
// Format Number
// ----------------------------------------------------------

function formatNumber(value) {

    return new Intl.NumberFormat().format(value);

}

// ----------------------------------------------------------
// Load Values From URL
// ----------------------------------------------------------

function loadFromURL() {

    const params = new URLSearchParams(window.location.search);

    const loan = params.get("loan");
    const amount = params.get("amount");
    const rate = params.get("rate");
    const tenure = params.get("tenure");

    if (typeof loanConfigs !== "undefined" && loan && loanConfigs[loan]) {
        currentLoanType = loan;
    }

    if (amount && $("amount")) {
        $("amount").value = amount;
    }

    if (rate && $("rate")) {
        $("rate").value = rate;
    }

    if (tenure && $("tenure")) {
        $("tenure").value = tenure;
    }

}

// ----------------------------------------------------------
// Update URL
// ----------------------------------------------------------

function updateURL() {

    if (
        !$("amount") ||
        !$("rate") ||
        !$("tenure")
    ) {
        return;
    }

    const params = new URLSearchParams();

    params.set("loan", currentLoanType);

    params.set("amount", $("amount").value);

    params.set("rate", $("rate").value);

    params.set("tenure", $("tenure").value);

    history.replaceState({}, "", "?" + params.toString());

}