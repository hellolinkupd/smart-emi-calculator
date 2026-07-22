// ==========================================================
// SMART EMI CALCULATOR
// Dynamic JSON-LD Schema
// Version: 5.0.0
// ==========================================================

// ----------------------------------------------------------
// Generate Schema
// ----------------------------------------------------------

function loadSchema() {

    const config = loanConfigs[currentLoanType];

    if (!config) {
        return;
    }

    const schema = [

        {

            "@context": "https://schema.org",

            "@type": "WebApplication",

            "name": config.h1,

            "applicationCategory": "FinanceApplication",

            "operatingSystem": "Any",

            "description": config.metaDescription,

            "url":
                window.location.origin +
                window.location.pathname +
                "?loan=" +
                currentLoanType,

            "offers": {

                "@type": "Offer",

                "price": "0",

                "priceCurrency": config.currency || currentCurrency

            }

        },

        getFAQSchema(),

        getBreadcrumbSchema()

    ];

    const script = $("dynamicSchema");

    if (!script) {
        return;
    }

    script.textContent = JSON.stringify(
    schema,
    null,
    2
);

}

// ----------------------------------------------------------
// FAQ Schema
// ----------------------------------------------------------

function getFAQSchema() {

    const faqs = faqData[currentLoanType] || [];

    return {
        "@type": "FAQPage",
        "mainEntity": faqs.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

}

// ----------------------------------------------------------
// Breadcrumb Schema
// ----------------------------------------------------------

function getBreadcrumbSchema() {

    return {

        "@type": "BreadcrumbList",

        "itemListElement": [

            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": window.location.origin + "/"
            },

            {
                "@type": "ListItem",
                "position": 2,
                "name": loanConfigs[currentLoanType].name,
                "item":
                    window.location.origin +
                    window.location.pathname +
                    "?loan=" +
                    currentLoanType
            }

        ]

    };

}