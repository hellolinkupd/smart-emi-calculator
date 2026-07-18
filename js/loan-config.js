// ==========================================================
// SMART EMI CALCULATOR
// Loan Configuration
// Version: 4.0.0
// ==========================================================

const loanConfigs = {

    home: {
        id: "home",
        name: "Home Loan",
        slug: "home-loan-emi-calculator",

        seoTitle: "Home Loan EMI Calculator",
        metaDescription: "Calculate your home loan EMI, monthly repayment, total interest and repayment schedule.",

        h1: "Home Loan EMI Calculator",

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
            "Home loans are designed to help individuals purchase, build or renovate residential properties. Typical repayment periods range from 5 to 30 years.",

        benefits: [
            "Estimate monthly EMI",
            "Compare loan tenures",
            "Calculate total repayment",
            "Plan your housing budget"
        ]
    },

    car: {
        id: "car",
        name: "Car Loan",
        slug: "car-loan-emi-calculator",

        seoTitle: "Car Loan EMI Calculator",
        metaDescription: "Calculate car loan EMI for new and used vehicles with flexible repayment options.",

        h1: "Car Loan EMI Calculator",

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
            "Car loans are generally repaid over 1 to 7 years depending on the lender and vehicle type.",

        benefits: [
            "Estimate monthly EMI",
            "Compare repayment periods",
            "Understand borrowing costs",
            "Plan your vehicle purchase"
        ]
    },

    personal: {
        id: "personal",
        name: "Personal Loan",
        slug: "personal-loan-emi-calculator",

        seoTitle: "Personal Loan EMI Calculator",
        metaDescription: "Calculate EMI for personal loans used for travel, weddings, medical expenses and more.",

        h1: "Personal Loan EMI Calculator",

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
            "Personal loans are unsecured loans suitable for emergencies, travel, weddings and debt consolidation.",

        benefits: [
            "Quick EMI estimate",
            "Flexible repayment",
            "Compare loan offers",
            "Budget your finances"
        ]
    },

    education: {
        id: "education",
        name: "Education Loan",
        slug: "education-loan-emi-calculator",

        seoTitle: "Education Loan EMI Calculator",
        metaDescription: "Estimate education loan EMI for studying in India or abroad.",

        h1: "Education Loan EMI Calculator",

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
            "Education loans cover tuition fees, accommodation, books and other study-related expenses.",

        benefits: [
            "Calculate monthly EMI",
            "Estimate total interest",
            "Plan higher education",
            "Compare repayment options"
        ]
    },

    business: {
        id: "business",
        name: "Business Loan",
        slug: "business-loan-emi-calculator",

        seoTitle: "Business Loan EMI Calculator",
        metaDescription: "Calculate EMI for business expansion, equipment and working capital loans.",

        h1: "Business Loan EMI Calculator",

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
            "Business loans help finance inventory, machinery, expansion and day-to-day working capital.",

        benefits: [
            "Estimate EMI",
            "Improve cash-flow planning",
            "Compare loan offers",
            "Plan business growth"
        ]
    }

};