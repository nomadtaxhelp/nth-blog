// FAQ data shared between the human /faq page and the machine /ai/faq.json
// endpoint. Single source of truth — edit here, both surfaces update.

export interface FAQItem {
  q: string;
  a: string;
  seeAlso?: { url: string; label: string };
}

export interface FAQSection {
  id: string;
  title: string;
  intro?: string;
  items: FAQItem[];
}

export const faqSections: FAQSection[] = [
  {
    id: 'basics',
    title: 'Tax residence and filing',
    intro: "Start with the places you lived and worked during the tax year.",
    items: [
      {
        q: 'What is "tax residency" and why should I care?',
        a: "Tax residence determines how a country applies its tax rules to you. It is different from citizenship and immigration permission. Countries use their own tests, and more than one can initially regard you as resident. Your income and activities can also create tax obligations where you are not resident.",
      },
      {
        q: 'Who can help me file taxes if I worked in several countries?',
        a: "Start with the accountant who handles your existing return. Send the tax year, your arrival and departure dates, where you performed each job and how you were paid. Ask which returns they can prepare and where you need a second adviser. If a company paid you, list its filings separately. For example, a UK landlord working abroad can still need help reporting rent as well as establishing the date of departure.",
        seeAlso: { url: '/blog/posts/digital-nomad-taxes', label: 'Worked example of a UK departure-year return' },
      },
      {
        q: 'How do I compare prices for digital nomad tax filing help?',
        a: "Ask two preparers to quote the same work. Specify the tax year, each country, the personal or company returns involved, and whether earlier years need correcting. Ask who prepares and submits each return, whether advice on residence is included, and what an additional country costs. The $67 Nomad Tax Help call is a planning session. The cost of filing a return is a separate question for the preparer.",
        seeAlso: { url: '/blog/posts/digital-nomad-taxes', label: 'How to brief a tax preparer across countries' },
      },
      {
        q: 'Can I just leave the country and stop paying tax?',
        a: "Not automatically. Apply your home country’s residence rules to your actual move and check continuing source-country tax, filings and any exit charges. Deregistration or a new foreign permit alone does not settle all of those questions.",
        seeAlso: { url: '/blog/posts/european-nomad-tax-playbook', label: 'The European nomad tax playbook' },
      },
      {
        q: "What's the difference between citizenship and tax residency?",
        a: "Citizenship is nationality. Tax residence is a status determined under tax rules. The two are different, although nationality can also affect taxation. This service is designed for non-US persons; US tax connections need separate specialist advice.",
      },
      {
        q: 'Is the 183-day rule the only test that matters?',
        a: "Start with the country and the tax year. In the UK, 183 days in a tax year is enough for UK residence, but fewer days can still result in residence under other tests. Other countries can use different thresholds and periods. Record where you worked and kept a home alongside the dates in your travel calendar.",
        seeAlso: { url: '/blog/glossary#day-count-test', label: 'Day-count test in the glossary' },
      },
      {
        q: 'What is an OECD tie-breaker rule?',
        a: "Some bilateral tax treaties use residence tie-breakers when both countries treat someone as resident. The applicable treaty, if one exists and covers the person, determines the tests. Do not assume every country pair has such a treaty or that a certificate alone settles the outcome.",
        seeAlso: { url: '/blog/glossary#tie-breaker-rule', label: 'Tie-breaker rule in the glossary' },
      },
    ],
  },
  {
    id: 'exit',
    title: 'Exiting Your Home Country',
    intro: 'Most people get the destination right and the exit wrong. This is where the real risk sits.',
    items: [
      {
        q: "I'm a UK resident. How do I cleanly exit?",
        a: "Apply HMRC’s Statutory Residence Test, including automatic tests and sufficient ties. Split-year treatment has separate conditions, as do temporary non-residence rules on a later return. Confirm the appropriate departure filings for your circumstances with a UK adviser.",
        seeAlso: { url: '/blog/glossary#uk-srt', label: 'UK Statutory Residence Test in the glossary' },
      },
      {
        q: "I'm a Spanish resident. What's the exit?",
        a: "Review days, economic interests and the rebuttable family presumption under Spain’s rules. More than 183 days is one test; sporadic absences may count. Administrative address changes do not alone determine the result. Use a Spanish adviser for the move-year position and filings.",
        seeAlso: { url: '/blog/glossary#renta-mundial', label: 'Renta mundial in the glossary' },
      },
      {
        q: 'What is the German Wegzugsteuer and does it apply to me?',
        a: "German exit-tax rules can affect people with qualifying ownership interests when relevant conditions are met. It is not a universal charge on every emigrant. Have a German adviser review your holdings, residence history and planned move before restructuring or selling.",
        seeAlso: { url: '/blog/glossary#wegzugsteuer', label: 'Wegzugsteuer in the glossary' },
      },
      {
        q: 'Do I need to be a tax resident somewhere?',
        a: "Establish your position under each relevant country’s rules rather than assuming constant travel makes you non-resident everywhere. Banks may also request tax-residence information. Use an accurate, documented position that fits your actual circumstances.",
      },
      {
        q: "What documents prove I've actually exited?",
        a: "Keep travel and work-location records, evidence about available homes and family ties, relevant filings and tax certificates, and written advice. The required evidence depends on the country and issue; no generic document pack guarantees an accepted exit.",
      },
    ],
  },
  {
    id: 'where',
    title: 'Where to Set Up',
    intro: 'The realistic options for an EU or rest-of-world nomad in 2026.',
    items: [
      {
        q: 'What is the cheapest 0% tax residency I can get?',
        a: 'Compare the complete first-year and renewal costs for your circumstances. NTH Premium+ is $5,950, with flights, accommodation and translations separate. Presence requirements and tax eligibility differ between Paraguay, Cyprus and the UAE.',
        seeAlso: { url: '/blog/posts/paraguay-tax-residency-cost-2026', label: 'Full Paraguay cost breakdown' },
      },
      {
        q: 'Why Paraguay over Dubai?',
        a: "Compare your actual income, intended time in each country, immigration route, personal and company taxes, banking and recurring costs. Paraguay and the UAE have different rules; neither a short visit nor a company registration automatically establishes a tax-free personal position.",
      },
      {
        q: 'Is Portugal NHR still available?',
        a: "NHR was repealed from 1 January 2024 with transitional protections; eligible existing holders retain the remainder of their period. IFICI is a separate incentive that can cover qualifying employment and self-employment. Check the exact role and eligibility conditions.",
        seeAlso: { url: '/blog/posts/portugal-nhr-replacement-2026', label: 'Portugal NHR and IFICI explained' },
      },
      {
        q: 'Can I just live in Bali, Bangkok, or Tbilisi without setting anything up?',
        a: "Review immigration permission, work rights, local tax rules and your previous tax residence before a long stay. Constant movement does not itself remove obligations. The answer depends on what you do, where and for how long.",
      },
      {
        q: 'What about Italy, Bulgaria, or other low-tax EU options?',
        a: "Compare the current rules for your move date and income type, including qualification, social contributions, residence requirements and renewal costs. Do not rely on old flat-tax figures or assume a headline rate covers every kind of income.",
      },
    ],
  },
  {
    id: 'paraguay',
    title: 'Paraguay Specifically',
    intro: 'Our flagship product, in detail.',
    items: [
      {
        q: "How does Paraguay's tax system actually work?",
        a: "Paraguay’s personal-income rules focus on Paraguayan-source income. Source depends on the activity, asset or right producing income, not just the payer or bank location. Work performed in Paraguay for foreign clients needs its own analysis. Company and crypto activity also require specific review.",
        seeAlso: { url: '/blog/posts/paraguay-tax-residency-guide', label: 'Complete Paraguay tax residency guide' },
      },
      {
        q: 'How long does Paraguay residency take to set up?',
        a: "NTH currently plans around 4–7 days for initial appointments. Residence approval, the cédula, RUC and fiscal certificate are separate later stages. Government processing times are not guaranteed. Confirm your route and current estimates before booking travel.",
      },
      {
        q: 'What does Paraguay residency cost?',
        a: "Nomad Tax Help offers Premium+ at $5,950 for a coordinated Paraguay residency and US business setup. Flights, accommodation and document translations are separate. See the current services page for inclusions and confirm renewal costs in your proposal.",
        seeAlso: { url: '/blog/posts/paraguay-tax-residency-cost-2026', label: 'Full cost breakdown' },
      },
      {
        q: 'Do I actually have to live in Paraguay?',
        a: "Immigration absence limits, fiscal residence and your other countries’ tax rules are different questions. The migration law addresses unjustified absences over one year for temporary residents and three consecutive years for permanent residents, subject to authorisation provisions. This is not a universal tax-residence day count.",
      },
      {
        q: 'What documents do I need to set up?',
        a: "The ordinary temporary route includes identity and entry documents, a birth record, applicable background checks and civil-status records where relevant, plus local requirements. Authentication, translations, prior residence and nationality can change the checklist. Check the current official list before travel.",
      },
      {
        q: 'Can my home country still tax me after Paraguay residency?',
        a: "Yes, depending on residence rules, local-source income and other obligations. A Paraguay permit alone does not end those claims. NTH can discuss service fit; your home-country tax position needs the appropriate professional review.",
      },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Legitimacy',
    intro: "The questions you ask when your scam alarm starts going off. (Don't worry, we wanted answers too.)",
    items: [
      {
        q: 'Is Paraguay residency actually legitimate?',
        a: "Yes, Paraguay has a statutory immigration process and tax rules. That does not approve every provider’s claim or guarantee a particular tax outcome. Check the official requirements, the written service scope and the treatment of your income.",
        seeAlso: { url: '/blog/posts/is-paraguay-tax-residency-legit', label: 'Full legitimacy deep-dive' },
      },
      {
        q: 'Will European banks accept Paraguay tax residency?',
        a: "Each bank decides under its own onboarding and ongoing-review requirements. Ask what it needs for identity, address, tax residence, business activity and source of funds. No single document pack guarantees acceptance by every bank.",
      },
      {
        q: 'What is OECD CRS and how does it affect me?',
        a: "CRS is a framework for automatic financial-account information exchange between participating jurisdictions. The OECD’s May 2026 update says Paraguay is preparing to commence in 2027. Participation does not approve an individual residency setup. Give institutions accurate residence information.",
        seeAlso: { url: '/blog/glossary#crs', label: 'OECD CRS in the glossary' },
      },
      {
        q: 'Will my old country audit me if I move?',
        a: "An audit cannot be ruled out. Keep records supporting your residence, income and filings. A new permit or certificate does not prevent an authority from reviewing your circumstances under its rules.",
      },
      {
        q: 'Is what I am doing legal?',
        a: "Residency and tax planning must follow the applicable rules and accurately reflect your circumstances. The legality of a particular arrangement needs review in the relevant jurisdictions. Do not hide income or misrepresent where you live or work.",
      },
    ],
  },
  {
    id: 'crypto',
    title: 'Crypto',
    intro: 'For nomads sitting on appreciated bags they want to realise.',
    items: [
      {
        q: 'Can I realise crypto gains tax-free in Paraguay?',
        a: "A residence permit, foreign exchange or self-custody wallet does not establish a blanket exemption. Review the source and classification of the transactions and your former country’s rules. DNIT’s 2026 crypto information-return requirements may also apply.",
        seeAlso: { url: '/blog/posts/paraguay-crypto-tax-residency', label: 'Paraguay for crypto nomads' },
      },
      {
        q: 'What counts as a crypto realisation event?',
        a: "Sales, swaps, spending and other transactions can have tax consequences, but the treatment depends on the jurisdiction and activity. Preserve the transaction history and have each type classified rather than applying one rule to the whole portfolio.",
      },
      {
        q: 'What about crypto-to-crypto swaps?',
        a: "Do not assume that no fiat withdrawal means no tax or reporting. The treatment varies by jurisdiction. Paraguay’s Resolution 47/2026 includes swaps within the information-reporting scope for covered users.",
      },
      {
        q: 'How do I time a big realisation?',
        a: "Before executing, establish your residence position for the transaction date and review any exit or temporary non-residence rules, the transaction’s classification, reporting and bank evidence. Moving or changing account details after a transaction does not rewrite what happened.",
      },
    ],
  },
  {
    id: 'service',
    title: 'The Nomad Tax Help Service',
    intro: "Who we are, what we do, and what we don't.",
    items: [
      {
        q: 'What exactly does Nomad Tax Help do?',
        a: 'Premium+ coordinates Paraguay residency, local appointments, US company formation and applications for overseas banking. The written scope sets out the first-year accounting and filing support. Government authorities decide residence and tax-document applications, and each bank decides whether to accept an applicant.',
      },
      {
        q: 'Are you tax advisers?',
        a: "No. Nomad Tax Help is a facilitator, not a law firm or tax adviser. We don't file your taxes, draft contracts, or give formal legal opinions. We coordinate with licensed partners who do. Everything on this blog is educational; specifics for your situation should be confirmed with a professional.",
      },
      {
        q: 'How does the free service consultation differ from the $67 strategy call?',
        a: "The free consultation is for people considering our managed setup. The $67 Residency Accelerator includes the training and a private 40-minute strategy call about your own Paraguay plan. The self-study masterclass on its own is $17. Premium+ is our $5,950 managed service.",
      },
      {
        q: "Why don't you serve US citizens?",
        a: "US tax connections can create continuing obligations that require a different analysis. NTH’s current offer is for non-US persons; US citizens and green-card holders should obtain specialist advice for their situation.",
      },
      {
        q: "What if I've already moved abroad without doing this properly?",
        a: "Bring the timeline and existing documents to the discussion. Any correction of past filings or tax positions needs review by the relevant professional; a retrospective fix is not guaranteed.",
      },
    ],
  },
];

// Flat list of all questions for the FAQPage JSON-LD schema generator.
export const allFaqItems: FAQItem[] = faqSections.flatMap((s) => s.items);
