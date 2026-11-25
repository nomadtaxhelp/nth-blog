type ReadingGuide = {
  title: string;
  introduction: string;
  articles: Record<string, string>;
};

export const readingGuides: Record<string, ReadingGuide> = {
  cost: {
    title: 'How to budget for residency in Paraguay',
    introduction: 'A package quote is only part of the budget. Use these guides to price the documents and trips, then decide which appointments or paperwork you want someone to handle.',
    articles: {
      'paraguay-tax-residency-cost-2026': 'Start with the government charges, service options and costs to budget for separately.',
      'paraguay-residency-days-and-timeline': 'Work out when you would travel and where waiting for a document could affect your travel budget.',
      'paraguay-residency-diy-vs-agency': 'Compare what you would arrange yourself with the work included in a managed service.',
    },
  },
  crypto: {
    title: 'Paraguay residency for people who hold or trade crypto',
    introduction: 'If you still hold assets bought before you moved, start with their transaction history. Then check where your other income comes from and what documents a bank may ask to see when you move funds.',
    articles: {
      'paraguay-crypto-tax-residency': 'Read this first if you are preparing for a sale or putting together your transaction file.',
      'paraguay-foreign-income-tax': 'Use this when you also earn fees or provide services and need to distinguish that income from an investment.',
      'paraguay-residency-banking': 'Read the evidence checklist before you approach a bank or transfer proceeds.',
    },
  },
  'digital-nomads': {
    title: 'Tax and residency guides for digital nomads',
    introduction: 'Someone who moves every few weeks has different questions from someone looking for a home base. Start with where you already work and live, then compare the residency routes that fit your travel plans.',
    articles: {
      'digital-nomad-taxes': 'Start here if clients, employers and bank accounts are spread across countries.',
      'paraguay-digital-nomad-visa': 'Read this if you are looking for a Paraguayan visa for remote workers and want to understand the available residence route.',
      'paraguay-vs-georgia-tax-residency': 'Compare how a plan built around spending time in Georgia differs from one using Paraguay.',
    },
  },
  dubai: {
    title: 'Dubai and Paraguay for remote workers and founders',
    introduction: 'How much time do you actually want to spend in Dubai, and will you earn a salary or run a company there? Start with those questions before comparing the two destinations on price.',
    articles: {
      'paraguay-vs-dubai-tax-residency': 'Watch the comparison and follow the examples for an employee and a founder.',
      'best-tax-residency-digital-nomads': 'See where the UAE fits alongside other possible bases if you are still building a shortlist.',
      'paraguay-tax-residency-cost-2026': 'Use the Paraguay budget to compare the same travel, setup and recurring costs with your Dubai quote.',
    },
  },
  europe: {
    title: 'Moving a tax base from Europe',
    introduction: 'Before choosing a new base, write down which homes, work and family connections you would keep in the country you are leaving. These guides cover that starting point and two different destinations.',
    articles: {
      'european-nomad-tax-playbook': 'Start with the evidence you need to understand your current position.',
      'portugal-nhr-replacement-2026': 'Read this if Portugal features in your plans, particularly if you have seen older advice about NHR.',
      'paraguay-tax-residency-guide': 'Follow the Paraguay process if you are also considering a base outside Europe.',
    },
  },
  panama: {
    title: 'Comparing the Panama and Paraguay residency routes',
    introduction: 'If Panama and Paraguay are both on your shortlist, first compare the immigration routes available to you. Then build a comparable budget for the travel, documents and ongoing work each would require.',
    articles: {
      'paraguay-vs-panama-tax-residency': 'Start with Panama’s employment and investment routes and the corresponding Paraguay route.',
      'paraguay-residency-requirements': 'Check the documents and appointments you would actually need on the Paraguay side.',
      'paraguay-tax-residency-cost-2026': 'Price the Paraguay option before comparing it with a quote for your particular Panama route.',
    },
  },
  portugal: {
    title: 'Choosing a tax base after Portugal’s NHR changes',
    introduction: 'Someone already covered by NHR faces a different decision from someone considering Portugal for the first time. Start with the guide for your status, then compare an actual year of living and working in each country.',
    articles: {
      'portugal-nhr-replacement-2026': 'Find the sections on existing NHR status, the IFICI regime and other possible bases.',
      'european-nomad-tax-playbook': 'Check what your work, travel and home ties mean for a move from another European country.',
      'best-tax-residency-digital-nomads': 'Compare other bases if the Portuguese route does not suit your income or time in the country.',
    },
  },
  'tax-residency': {
    title: 'How to establish and document tax residency',
    introduction: 'When someone asks where you pay tax, the useful answer depends on where you live, where you work and what you can document. Start with these three guides, followed by the country and income questions below.',
    articles: {
      'paraguay-tax-residency-guide': 'Follow the steps from deciding whether Paraguay fits to putting your records in order.',
      'digital-nomad-taxes': 'Start here instead if your first question is which country currently has a claim on your income.',
      'paraguay-residency-ruc-tax-certificate': 'Use this if a bank or former tax authority has asked for proof of tax residence.',
    },
  },
  ueno: {
    title: 'Banking in Paraguay after the Ueno news',
    introduction: 'If the bank news has made you reconsider a move, start with the briefing. The banking guide and document guide can then help you prepare for a conversation with a bank about your own accounts.',
    articles: {
      'paraguay-residency-after-ueno': 'Watch the briefing or read the transcript on the difference between holding residency and holding deposits.',
      'paraguay-residency-banking': 'Compare the jobs of a personal account and a company account, and review the documents providers can request.',
      'paraguay-residency-ruc-tax-certificate': 'Check which Paraguayan document you have when a bank asks for tax or identity evidence.',
    },
  },
  banking: {
    title: 'Choosing accounts for personal spending and business income',
    introduction: 'Follow a payment from your client to your company account and then to your personal spending account. These guides explain which provider checks apply along that route and which documents to prepare.',
    articles: {
      'paraguay-residency-banking': 'Compare the jobs of different accounts, eligibility checks and transfer costs.',
      'paraguay-residency-us-llc': 'See which records relate to your company and which relate to you as its owner.',
      'paraguay-residency-ruc-tax-certificate': 'Check which document you have when a bank asks about your tax residence.',
    },
  },
  comparison: {
    title: 'How to compare residency options on the same terms',
    introduction: 'A residence permit, an annual company fee and a personal tax rate answer different questions. Use the same income, travel and budget assumptions when you compare your shortlist.',
    articles: {
      'best-tax-residency-digital-nomads': 'Compare several bases using the same work and travel pattern.',
      'paraguay-vs-dubai-tax-residency': 'Compare the presence, administration and costs of Paraguay and Dubai.',
      'paraguay-vs-panama-tax-residency': 'Distinguish an investment requirement from a fee or a recurring cost.',
    },
  },
  'foreign-income': {
    title: 'Tracing where your income comes from',
    introduction: 'An overseas customer, a foreign bank account and a day spent working abroad are three different facts. Start with the type of income and where the activity took place.',
    articles: {
      'paraguay-foreign-income-tax': 'Use the examples to distinguish services, investments and other income.',
      'paraguay-residency-us-llc': 'Check what changes when a company invoices the customer.',
      'paraguay-crypto-tax-residency': 'Work through the different records you may need for digital assets.',
    },
  },
  georgia: {
    title: 'Comparing Georgia with Paraguay for freelance work',
    introduction: 'If you invoice clients yourself, compare the treatment of that income alongside your travel plans. Georgia’s small-business rules and Paraguay’s source rules require different checks.',
    articles: {
      'paraguay-vs-georgia-tax-residency': 'Start with the eligibility, turnover and presence questions for each option.',
      'paraguay-foreign-income-tax': 'Examine where your freelance work takes place on the Paraguay side.',
      'best-tax-residency-digital-nomads': 'Compare another base if neither route suits your year.',
    },
  },
  legitimacy: {
    title: 'Checking official rules and a provider’s claims',
    introduction: 'If a quote promises residency and a particular tax result, verify those parts separately. These guides show where to read the official rules, what each document establishes and what to ask the provider in writing.',
    articles: {
      'is-paraguay-tax-residency-legit': 'Review the legal basis and the limits of a residency claim.',
      'paraguay-residency-ruc-tax-certificate': 'Check what a residence permit, cédula, RUC and tax certificate each document.',
      'choose-paraguay-residency-agency': 'Test a proposed scope of work against specific documents and responsibilities.',
    },
  },
  nhr: {
    title: 'What to review as an existing Portuguese NHR period ends',
    introduction: 'If you already have NHR status, start with the dates in your own approval. The guides below address what to review before a move and how to compare staying in Portugal with establishing another base.',
    articles: {
      'portugal-nhr-replacement-2026': 'Find the section on existing NHR holders and the distinction between NHR and IFICI.',
      'european-nomad-tax-playbook': 'List the home, work and family connections relevant to an exit review.',
      'paraguay-tax-residency-cost-2026': 'Build a comparison budget for a Paraguay move, including travel and recurring costs.',
    },
  },
  'nomad-setup': {
    title: 'Planning the paperwork before a move to Paraguay',
    introduction: 'Build a plan you can use before buying flights. Start with the documents you can obtain from abroad, work out when you need to attend in person and decide what you want help arranging.',
    articles: {
      'paraguay-residency-requirements': 'Prepare a checklist based on nationality and previous places of residence.',
      'paraguay-residency-days-and-timeline': 'Separate the appointment trip from the later processing stages.',
      'paraguay-residency-diy-vs-agency': 'Decide who will check the documents and follow up after submission.',
    },
  },
  'nomad-tax': {
    title: 'Working out where a travelling freelancer may owe tax',
    introduction: 'Before choosing a new base, make a calendar of your working days and note who invoices each client. Use that picture to investigate your current position and the countries you are considering.',
    articles: {
      'digital-nomad-taxes': 'Start with where you live, work and maintain ties.',
      'european-nomad-tax-playbook': 'Review the records to take to your home-country adviser.',
      'paraguay-foreign-income-tax': 'Check how Paraguay approaches the source of freelance income.',
    },
  },
  paraguay: {
    title: 'Where to start with Paraguayan residency',
    introduction: 'The residency route, the budget for your trip and your tax documentation are separate planning decisions. Start with these three guides and follow the subject that matches your next decision.',
    articles: {
      'paraguay-tax-residency-guide': 'See the route from initial preparation through later registrations.',
      'paraguay-tax-residency-cost-2026': 'Estimate the initial and continuing cost for your own route.',
      'paraguay-residency-ruc-tax-certificate': 'Identify what each document can demonstrate when someone asks for proof.',
    },
  },
  'territorial-tax': {
    title: 'Checking territorial taxation against your actual work',
    introduction: 'Where you are registered and where you perform the work can lead to different tax questions. Work through source rules, residence documents and any obligations you retain in another country.',
    articles: {
      'paraguay-foreign-income-tax': 'Apply the source rules to each income stream.',
      'paraguay-residency-ruc-tax-certificate': 'Distinguish evidence of registration from evidence about the source of income.',
      'european-nomad-tax-playbook': 'Check which obligations may continue in your previous country.',
    },
  },
  'us-llc': {
    title: 'Running a US LLC alongside a Paraguay base',
    introduction: 'Start with the company you already have, the name on your contracts and the account that receives customer payments. Use those details to assess formation, filing and banking questions together.',
    articles: {
      'paraguay-residency-us-llc': 'Review ownership, US filings and how your activity affects the analysis.',
      'paraguay-residency-banking': 'Check what the bank needs from the business and its owners.',
      'paraguay-foreign-income-tax': 'Trace the income separately from the location of the account.',
    },
  },
  visa: {
    title: 'Choosing the right immigration route for remote work in Paraguay',
    introduction: 'If you arrived looking for a digital nomad visa, establish which immigration category actually fits your circumstances. Then check the document list and what it takes to keep your status while travelling.',
    articles: {
      'paraguay-digital-nomad-visa': 'Understand the difference between a visitor stay and an ordinary residence application.',
      'paraguay-residency-requirements': 'Check the documents for your route before making travel arrangements.',
      'maintaining-paraguay-residency': 'Plan for absence rules and the later permanent-residency stage.',
    },
  },
};
