// ==========================================================
// SMART EMI CALCULATOR
// Dynamic FAQ
// Version: 5.0.0
// ==========================================================

// ----------------------------------------------------------
// FAQ Database
// ----------------------------------------------------------

const faqData = {

    home: [

        {
            question: "What is a Home Loan EMI?",
            answer: "A Home Loan EMI is the fixed monthly payment you make to repay your home loan. It includes both principal and interest."
        },

        {
            question: "Can I reduce my Home Loan EMI?",
            answer: "Yes. You can reduce your EMI by choosing a longer repayment tenure or getting a lower interest rate."
        },

        {
            question: "Does prepayment reduce interest?",
            answer: "Yes. Making partial or full prepayments reduces your outstanding principal and total interest payable."
        }

    ],

    car: [

        {
            question: "How is Car Loan EMI calculated?",
            answer: "Car Loan EMI depends on the loan amount, interest rate and repayment tenure."
        },

        {
            question: "Can I repay my car loan early?",
            answer: "Most lenders allow early repayment, although prepayment charges may apply."
        }

    ],

    personal: [

        {
            question: "What is a Personal Loan EMI?",
            answer: "A Personal Loan EMI is your fixed monthly repayment covering principal and interest."
        },

        {
            question: "Do personal loans require collateral?",
            answer: "Most personal loans are unsecured and do not require collateral."
        }

    ],

    education: [

        {
            question: "When does Education Loan repayment begin?",
            answer: "Many lenders offer a moratorium period during studies, after which EMI repayment begins."
        }

    ],

    business: [

        {
            question: "Can businesses prepay loans?",
            answer: "Yes. Many business loans allow partial or full prepayment depending on lender policies."
        }

    ],

    bike: [

        {
            question: "How long is a Bike Loan tenure?",
            answer: "Bike loans are commonly repaid over one to five years."
        }

    ],

    gold: [

        {
            question: "Is a Gold Loan secured?",
            answer: "Yes. Gold loans are secured against pledged gold jewellery."
        }

    ],

    lap: [

        {
            question: "What is Loan Against Property?",
            answer: "It is a secured loan where residential or commercial property is pledged as collateral."
        }

    ]

};

// ----------------------------------------------------------
// Render FAQ
// ----------------------------------------------------------

function loadFAQ() {

    const container = $("faq");

    if (!container) {
        return;
    }

    const faqs = faqData[currentLoanType] || [];

    container.innerHTML = "";

    faqs.forEach(item => {

        const faqItem = document.createElement("details");

        faqItem.className = "faq-item";

        faqItem.innerHTML = `

            <summary>${item.question}</summary>

            <p>${item.answer}</p>

        `;

        container.appendChild(faqItem);

    });

}