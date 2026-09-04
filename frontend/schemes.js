const schemes = [

{
    name: "PM-KISAN",
    category: "Farmers",
    targetUsers: ["farmers"],
    occupation: ["farmer"],
    benefit: "₹6,000 per year",
    description:
        "PM-KISAN provides financial support to eligible landholding farmer families.",
    eligibility:
        "Eligible landholding farmer families, subject to the scheme's exclusion criteria.",
    documents:
        "Aadhaar, bank account details and land-related records may be required.",
    keywords: [
        "farmer",
        "farmers",
        "agriculture",
        "kisan",
        "farming",
        "land"
    ],
    officialWebsite: "https://pmkisan.gov.in/"
},


{
    name: "Ayushman Bharat PM-JAY",
    category: "Health",
    targetUsers: ["general citizens", "families"],
    occupation: ["all"],
    benefit: "Health coverage for eligible families",
    description:
        "PM-JAY provides health protection to eligible beneficiaries for specified medical treatments.",
    eligibility:
        "Eligibility is determined according to the applicable government criteria.",
    documents:
        "Documents may vary depending on beneficiary verification requirements.",
    keywords: [
        "health",
        "hospital",
        "medical",
        "treatment",
        "healthcare",
        "medicine"
    ],
    officialWebsite: "https://pmjay.gov.in/"
},


{
    name: "Pradhan Mantri Ujjwala Yojana",
    category: "Women",
    targetUsers: ["women", "households"],
    occupation: ["all"],
    benefit: "LPG connection support",
    description:
        "PMUY aims to provide clean cooking fuel access to eligible households.",
    eligibility:
        "Eligibility depends on the scheme's applicable criteria for households.",
    documents:
        "Identity and household-related documents may be required.",
    keywords: [
        "women",
        "woman",
        "lpg",
        "gas",
        "cooking",
        "household"
    ],
    officialWebsite: "https://www.pmuy.gov.in/"
},


{
    name: "Pradhan Mantri Awas Yojana",
    category: "Housing",
    targetUsers: ["families", "home seekers"],
    occupation: ["all"],
    benefit: "Housing assistance",
    description:
        "PMAY provides assistance aimed at improving access to housing for eligible beneficiaries.",
    eligibility:
        "Eligibility depends on the applicable PMAY component and government criteria.",
    documents:
        "Identity, address and income-related documents may be required.",
    keywords: [
        "house",
        "housing",
        "home",
        "awas",
        "shelter"
    ],
    officialWebsite: "https://pmaymis.gov.in/"
},


{
    name: "PMKVY",
    category: "Jobs & Skills",
    targetUsers: ["students", "job seekers", "young people"],
    occupation: ["student", "job seeker", "unemployed"],
    benefit: "Skill development training",
    description:
        "Pradhan Mantri Kaushal Vikas Yojana supports skill development and training.",
    eligibility:
        "Eligibility depends on the particular training programme and applicable criteria.",
    documents:
        "Identity and educational or other supporting documents may be required.",
    keywords: [
        "job",
        "jobs",
        "skill",
        "skills",
        "training",
        "employment",
        "career"
    ],
    officialWebsite: "https://www.pmkvyofficial.org/"
},


{
    name: "National Scholarship Portal",
    category: "Education",
    targetUsers: ["students"],
    occupation: ["student"],
    benefit: "Scholarship opportunities",
    description:
        "The National Scholarship Portal provides access to various government scholarship schemes.",
    eligibility:
        "Eligibility varies according to the individual scholarship scheme.",
    documents:
        "Documents can include Aadhaar, educational records, income certificate and bank details.",
    keywords: [
        "scholarship",
        "scholarships",
        "student",
        "education",
        "college",
        "school",
        "fees"
    ],
    officialWebsite: "https://scholarships.gov.in/"
},


{
    name: "Sukanya Samriddhi Yojana",
    category: "Women & Child",
    targetUsers: ["girl children", "parents"],
    occupation: ["all"],
    benefit: "Savings scheme for eligible girl children",
    description:
        "Sukanya Samriddhi Yojana is a savings scheme intended for eligible girl children.",
    eligibility:
        "Eligibility is subject to the scheme's applicable rules.",
    documents:
        "Birth and identity-related documents may be required.",
    keywords: [
        "girl",
        "girl child",
        "daughter",
        "child",
        "sukanya",
        "savings"
    ],
    officialWebsite: "https://www.indiapost.gov.in/"
},


{
    name: "Atal Pension Yojana",
    category: "Pension",
    targetUsers: ["workers", "citizens"],
    occupation: ["worker", "self employed"],
    benefit: "Pension support",
    description:
        "Atal Pension Yojana is a government-backed pension scheme.",
    eligibility:
        "Eligibility depends on the applicable age and other scheme requirements.",
    documents:
        "Aadhaar and bank account details may be required.",
    keywords: [
        "pension",
        "retirement",
        "old age",
        "worker"
    ],
    officialWebsite: "https://www.pfrda.org.in/"
},


{
    name: "PM SVANidhi",
    category: "Street Vendors",
    targetUsers: ["street vendors"],
    occupation: ["street vendor"],
    benefit: "Working capital loan support",
    description:
        "PM SVANidhi supports eligible street vendors with working capital assistance.",
    eligibility:
        "Eligibility depends on the applicable street-vendor and scheme criteria.",
    documents:
        "Identity and vendor-related documents may be required.",
    keywords: [
        "vendor",
        "vendors",
        "street vendor",
        "small business",
        "stall",
        "shop"
    ],
    officialWebsite:
        "https://pmsvanidhi.mohua.gov.in/"
},


{
    name: "Pradhan Mantri Mudra Yojana",
    category: "Business",
    targetUsers: ["entrepreneurs", "small business owners"],
    occupation: ["business owner", "entrepreneur", "self employed"],
    benefit: "Business loan support",
    description:
        "Pradhan Mantri Mudra Yojana provides credit support for eligible micro and small business activities.",
    eligibility:
        "Eligibility depends on the lending institution and applicable scheme requirements.",
    documents:
        "Identity, address and business-related documents may be required.",
    keywords: [
        "mudra",
        "pmmy",
        "mudra loan",
        "business",
        "business loan",
        "loan",
        "loans",
        "entrepreneur",
        "entrepreneurship",
        "startup",
        "small business",
        "shop",
        "self employed",
        "self-employed"
    ],
    officialWebsite:
        "https://www.mudra.org.in/"
},

{
    name: "Pradhan Mantri Jan Dhan Yojana",
    category: "Financial Inclusion",
    targetUsers: ["unbanked people", "citizens"],
    occupation: ["all"],
    benefit: "Basic bank account and access to financial services",
    description:
        "PMJDY aims to provide access to basic banking, credit, insurance, pension and Direct Benefit Transfer services.",
    eligibility:
        "The scheme focuses on providing banking access to unbanked adults, subject to applicable account-opening requirements.",
    documents:
        "Identity and address-related documents may be required.",
    keywords: [
        "jan dhan",
        "jan dhan yojana",
        "pmjdy",
        "bank account",
        "zero balance",
        "banking",
        "financial inclusion"
    ],
    officialWebsite:
        "https://www.pmjdy.gov.in/"
},

{
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
    category: "Insurance",
    targetUsers: ["citizens", "bank account holders"],
    occupation: ["all"],
    benefit: "Life insurance cover",
    description:
        "PMJJBY is a government-backed renewable life insurance scheme.",
    eligibility:
        "Eligible bank account holders in the applicable age group can enrol subject to scheme conditions.",
    documents:
        "Bank account and identity-related details may be required.",
    keywords: [
        "pmjjby",
        "jeevan jyoti",
        "life insurance",
        "insurance",
        "life cover"
    ],
    officialWebsite:
        "https://financialservices.gov.in/"
},

{
    name: "Pradhan Mantri Suraksha Bima Yojana",
    category: "Insurance",
    targetUsers: ["citizens", "bank account holders"],
    occupation: ["all"],
    benefit: "Accident insurance cover",
    description:
        "PMSBY provides accident insurance protection to eligible subscribers.",
    eligibility:
        "Eligible bank account holders in the applicable age group can enrol subject to scheme conditions.",
    documents:
        "Bank account and identity-related details may be required.",
    keywords: [
        "pmsby",
        "suraksha bima",
        "accident insurance",
        "accident cover",
        "insurance"
    ],
    officialWebsite:
        "https://financialservices.gov.in/"
},

{
    name: "PM Surya Ghar Muft Bijli Yojana",
    category: "Energy",
    targetUsers: ["households", "residential electricity consumers"],
    occupation: ["all"],
    benefit: "Rooftop solar support and electricity savings",
    description:
        "PM Surya Ghar supports residential households in adopting rooftop solar systems.",
    eligibility:
        "Eligibility depends on the applicable residential rooftop solar scheme requirements.",
    documents:
        "Electricity connection and identity-related details may be required.",
    keywords: [
        "surya ghar",
        "pm surya ghar",
        "solar",
        "solar panel",
        "rooftop solar",
        "electricity",
        "bijli",
        "free electricity"
    ],
    officialWebsite:
        "https://pmsuryaghar.gov.in/"
},

{
    name: "Pradhan Mantri Vishwakarma Yojana",
    category: "Artisans & Craftspeople",
    targetUsers: ["artisans", "craftspeople", "traditional workers"],
    occupation: ["artisan", "craftsperson", "worker"],
    benefit: "Skill training, toolkit support and credit assistance",
    description:
        "PM Vishwakarma supports traditional artisans and craftspeople through training, tools and other assistance.",
    eligibility:
        "Eligibility depends on the notified trades and applicable scheme requirements.",
    documents:
        "Identity and occupation-related documents may be required.",
    keywords: [
        "vishwakarma",
        "pm vishwakarma",
        "artisan",
        "artisans",
        "craftsman",
        "craftsperson",
        "traditional worker",
        "tools",
        "toolkit"
    ],
    officialWebsite:
        "https://pmvishwakarma.gov.in/"
},

{
    name: "Stand-Up India",
    category: "Business",
    targetUsers: ["women entrepreneurs", "SC entrepreneurs", "ST entrepreneurs"],
    occupation: ["entrepreneur", "business owner"],
    benefit: "Bank loans for eligible greenfield enterprises",
    description:
        "Stand-Up India facilitates bank loans for eligible entrepreneurs starting greenfield enterprises.",
    eligibility:
        "Eligibility is subject to the scheme's requirements for women and SC/ST entrepreneurs.",
    documents:
        "Identity, address, business and financial documents may be required.",
    keywords: [
        "stand up india",
        "standup india",
        "women entrepreneur",
        "sc entrepreneur",
        "st entrepreneur",
        "business loan",
        "startup loan"
    ],
    officialWebsite:
        "https://www.standupmitra.in/"
},

{
    name: "PM Fasal Bima Yojana",
    category: "Farmers",
    targetUsers: ["farmers"],
    occupation: ["farmer"],
    benefit: "Crop insurance protection",
    description:
        "PMFBY provides crop insurance protection against specified crop-related risks.",
    eligibility:
        "Eligibility depends on notified crops, areas and applicable scheme conditions.",
    documents:
        "Identity, bank account and farming or crop-related details may be required.",
    keywords: [
        "fasal bima",
        "pmfby",
        "crop insurance",
        "crop loss",
        "farmer insurance",
        "farm insurance",
        "crop"
    ],
    officialWebsite:
        "https://pmfby.gov.in/"
},

{
    name: "Pradhan Mantri Shram Yogi Maandhan",
    category: "Pension",
    targetUsers: ["unorganised workers"],
    occupation: ["worker", "unorganised worker"],
    benefit: "Pension support",
    description:
        "PM-SYM is a contributory pension scheme for eligible workers in the unorganised sector.",
    eligibility:
        "Eligibility depends on age, income and other applicable scheme conditions.",
    documents:
        "Aadhaar and bank account details may be required.",
    keywords: [
        "shram yogi",
        "pm sym",
        "pm-sym",
        "maandhan",
        "pension",
        "unorganised worker",
        "unorganized worker",
        "labour",
        "worker"
    ],
    officialWebsite:
        "https://maandhan.in/"
},

{
    name: "Pradhan Mantri Employment Generation Programme",
    category: "Employment & Business",
    targetUsers: ["entrepreneurs", "job seekers", "business owners"],
    occupation: ["entrepreneur", "business owner", "self employed"],
    benefit: "Credit-linked support for setting up micro enterprises",
    description:
        "PMEGP supports eligible entrepreneurs in establishing new micro enterprises.",
    eligibility:
        "Eligibility depends on the applicable PMEGP guidelines and project requirements.",
    documents:
        "Identity, address, educational and business or project-related documents may be required.",
    keywords: [
        "pmegp",
        "employment generation",
        "business",
        "micro enterprise",
        "enterprise",
        "business loan",
        "self employment",
        "self-employment"
    ],
    officialWebsite:
        "https://www.kviconline.gov.in/pmegpeportal/"
},

{
    name: "Pradhan Mantri Matru Vandana Yojana",
    category: "Women & Child",
    targetUsers: ["pregnant women", "lactating mothers"],
    occupation: ["all"],
    benefit: "Maternity benefit support",
    description:
        "PMMVY provides maternity benefit support to eligible women according to applicable government guidelines.",
    eligibility:
        "Eligibility depends on the applicable PMMVY conditions and beneficiary criteria.",
    documents:
        "Identity, bank account and maternity-related documents may be required.",
    keywords: [
        "matru vandana",
        "pmmvy",
        "maternity",
        "pregnant",
        "pregnancy",
        "mother",
        "lactating",
        "women"
    ],
    officialWebsite:
        "https://pmmvy.wcd.gov.in/"
}
];
