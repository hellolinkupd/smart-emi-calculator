// ==========================================================
// SMART EMI CALCULATOR
// Loan Configuration
// Version: 5.0.0
// ==========================================================

const loanConfigs = {

    home: {

        id: "home",

        enabled: true,

        name: "Home Loan",

        slug: "home-loan-emi-calculator",

        seoTitle: "Home Loan EMI Calculator",

        metaDescription:
            "Calculate Home Loan EMI, monthly payment, total interest and amortization schedule.",

        h1: "Home Loan EMI Calculator",

        currency: "INR",

        defaultAmount: 5000000,

        defaultRate: 8.5,

        defaultTenure: 20,

        minAmount: 100000,

        maxAmount: 100000000,

        minRate: 5,

        maxRate: 20,

        minTenure: 5,

        maxTenure: 30,

        amountLabel: "Home Loan Amount",

        intro:
            "Estimate monthly EMI, total repayment and total interest for your home loan.",

        benefits: [

            "Estimate monthly EMI",

            "Compare loan tenures",

            "Calculate repayment",

            "Plan your housing budget"

        ]

    },

    car: {

        id: "car",

        enabled: true,

        name: "Car Loan",

        slug: "car-loan-emi-calculator",

        seoTitle: "Car Loan EMI Calculator",

        metaDescription:
            "Calculate Car Loan EMI, repayment schedule and total interest.",

        h1: "Car Loan EMI Calculator",

        currency: "INR",

        defaultAmount: 800000,

        defaultRate: 9,

        defaultTenure: 5,

        minAmount: 50000,

        maxAmount: 10000000,

        minRate: 6,

        maxRate: 18,

        minTenure: 1,

        maxTenure: 7,

        amountLabel: "Car Loan Amount",

        intro:
            "Estimate EMI for new and used vehicles instantly.",

        benefits: [

            "Monthly EMI",

            "Compare repayment",

            "Interest estimate",

            "Vehicle budgeting"

        ]

    },

    personal: {

        id: "personal",

        enabled: true,

        name: "Personal Loan",

        slug: "personal-loan-emi-calculator",

        seoTitle: "Personal Loan EMI Calculator",

        metaDescription:
            "Calculate Personal Loan EMI with repayment schedule.",

        h1: "Personal Loan EMI Calculator",

        currency: "INR",

        defaultAmount: 500000,

        defaultRate: 12,

        defaultTenure: 3,

        minAmount: 10000,

        maxAmount: 5000000,

        minRate: 8,

        maxRate: 24,

        minTenure: 1,

        maxTenure: 7,

        amountLabel: "Personal Loan Amount",

        intro:
            "Calculate EMI for unsecured personal loans.",

        benefits: [

            "Fast EMI",

            "Flexible repayment",

            "Interest estimate",

            "Budget planning"

        ]

    },

    education: {

        id: "education",

        enabled: true,

        name: "Education Loan",

        slug: "education-loan-emi-calculator",

        seoTitle: "Education Loan EMI Calculator",

        metaDescription:
            "Estimate education loan EMI for studies in India and abroad.",

        h1: "Education Loan EMI Calculator",

        currency: "INR",

        defaultAmount: 1500000,

        defaultRate: 9,

        defaultTenure: 10,

        minAmount: 100000,

        maxAmount: 20000000,

        minRate: 6,

        maxRate: 15,

        minTenure: 5,

        maxTenure: 15,

        amountLabel: "Education Loan Amount",

        intro:
            "Estimate student loan repayment with ease.",

        benefits: [

            "Monthly EMI",

            "Study planning",

            "Interest estimate",

            "Repayment options"

        ]

    },
        business: {

        id: "business",

        enabled: true,

        name: "Business Loan",

        slug: "business-loan-emi-calculator",

        seoTitle: "Business Loan EMI Calculator",

        metaDescription:
            "Calculate Business Loan EMI, repayment schedule and total interest.",

        h1: "Business Loan EMI Calculator",

        currency: "INR",

        defaultAmount: 2000000,

        defaultRate: 11,

        defaultTenure: 7,

        minAmount: 100000,

        maxAmount: 50000000,

        minRate: 7,

        maxRate: 22,

        minTenure: 1,

        maxTenure: 10,

        amountLabel: "Business Loan Amount",

        intro:
            "Estimate EMI for working capital, expansion and equipment financing.",

        benefits: [

            "Estimate EMI",

            "Business cash-flow planning",

            "Compare loan offers",

            "Business growth planning"

        ]

    },

    bike: {

        id: "bike",

        enabled: true,

        name: "Bike Loan",

        slug: "bike-loan-emi-calculator",

        seoTitle: "Bike Loan EMI Calculator",

        metaDescription:
            "Calculate Bike Loan EMI with repayment schedule.",

        h1: "Bike Loan EMI Calculator",

        currency: "INR",

        defaultAmount: 150000,

        defaultRate: 10,

        defaultTenure: 3,

        minAmount: 10000,

        maxAmount: 2000000,

        minRate: 6,

        maxRate: 18,

        minTenure: 1,

        maxTenure: 5,

        amountLabel: "Bike Loan Amount",

        intro:
            "Estimate EMI for motorcycles and scooters.",

        benefits: [

            "Affordable repayments",

            "Quick EMI estimate",

            "Interest breakdown",

            "Purchase planning"

        ]

    },

    gold: {

        id: "gold",

        enabled: true,

        name: "Gold Loan",

        slug: "gold-loan-emi-calculator",

        seoTitle: "Gold Loan EMI Calculator",

        metaDescription:
            "Estimate Gold Loan EMI secured against gold jewellery.",

        h1: "Gold Loan EMI Calculator",

        currency: "INR",

        defaultAmount: 300000,

        defaultRate: 8,

        defaultTenure: 2,

        minAmount: 10000,

        maxAmount: 5000000,

        minRate: 6,

        maxRate: 15,

        minTenure: 1,

        maxTenure: 5,

        amountLabel: "Gold Loan Amount",

        intro:
            "Estimate repayments for loans secured by gold.",

        benefits: [

            "Lower interest",

            "Fast approval",

            "Flexible repayment",

            "Quick funding"

        ]

    },

    lap: {

        id: "lap",

        enabled: true,

        name: "Loan Against Property",

        slug: "loan-against-property-emi-calculator",

        seoTitle: "Loan Against Property EMI Calculator",

        metaDescription:
            "Calculate EMI for loans secured against residential or commercial property.",

        h1: "Loan Against Property EMI Calculator",

        currency: "INR",

        defaultAmount: 4000000,

        defaultRate: 9,

        defaultTenure: 15,

        minAmount: 500000,

        maxAmount: 100000000,

        minRate: 6,

        maxRate: 18,

        minTenure: 5,

        maxTenure: 20,

        amountLabel: "Loan Amount",

        intro:
            "Estimate EMI for loans secured against property.",

        benefits: [

            "Higher loan amount",

            "Long repayment",

            "Competitive rates",

            "Property-backed financing"

        ]

    }

};

// ==========================================================
// Global Loan Type
// ==========================================================

let currentLoanType = "home";