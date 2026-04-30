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
    title: 'The Basics',
    intro: "If you're new to all this, start here.",
    items: [
      {
        q: 'What is "tax residency" and why should I care?',
        a: "Tax residency is the country that gets to tax your worldwide income. It's not the same as citizenship, and it's not the same as where you spend most of your time. Every country has its own rules for deciding if you're tax-resident there. Until you actively change yours, it's almost always the country you most recently lived in. As a nomad, this is the single most important thing to get right.",
      },
      {
        q: 'Can I just leave the country and stop paying tax?',
        a: "No. Walking out the door doesn't break your tax residency. You have to formally exit under your home country's specific rules: deregister, fall under the day-count threshold, sever ties (home, family, business). Skip that step and you stay on the hook regardless of where your suitcase is.",
        seeAlso: { url: '/posts/european-nomad-tax-playbook', label: 'The European nomad tax playbook' },
      },
      {
        q: "What's the difference between citizenship and tax residency?",
        a: 'Citizenship is your passport (nationality). Tax residency is which country claims your income for tax purposes. They\'re independent. A British citizen can be tax-resident in Paraguay; a German citizen can be tax-resident in the UAE. Only the United States and Eritrea tax their citizens on worldwide income regardless of where they live.',
      },
      {
        q: 'Is the 183-day rule the only test that matters?',
        a: 'No. Spending 183 or more days somewhere usually triggers tax residency there, but spending fewer than 183 days in your old country does not automatically remove you from its tax system. Most countries also look at where your home is, where your family is, where your business is run from, and where your "centre of vital interests" lies.',
        seeAlso: { url: '/glossary#day-count-test', label: 'Day-count test in the glossary' },
      },
      {
        q: 'What is an OECD tie-breaker rule?',
        a: 'When two countries both claim you as tax-resident under their own rules, the OECD double-tax treaty between them decides who wins. The hierarchy: (1) where you have a permanent home, (2) centre of vital interests, (3) habitual abode, (4) nationality, (5) competent-authority negotiation. The practical translation: do not leave both countries thinking you live there.',
        seeAlso: { url: '/glossary#tie-breaker-rule', label: 'Tie-breaker rule in the glossary' },
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
        a: 'The UK uses the Statutory Residence Test (SRT) since April 2013. You need to either pass an automatic non-resident test (for example, fewer than 16 days in the UK if you have been resident in any of the prior 3 years), or fall under the sufficient ties threshold for your day count. You also file a P85 with HMRC. Get this wrong and HMRC can claim you for years.',
        seeAlso: { url: '/glossary#uk-srt', label: 'UK Statutory Residence Test in the glossary' },
      },
      {
        q: "I'm a Spanish resident. What's the exit?",
        a: 'Spain looks at three things: 183 or more days in Spain, your centre of economic interests being in Spain, or your spouse and minor children living in Spain. You need to break all three. Then deregister from the padrón municipal, file Modelo 030, and Modelo 720 if you held foreign assets above the threshold. Spain is one of the harder exits in Europe.',
        seeAlso: { url: '/glossary#renta-mundial', label: 'Renta mundial in the glossary' },
      },
      {
        q: 'What is the German Wegzugsteuer and does it apply to me?',
        a: 'The Wegzugsteuer (exit tax) hits anyone who has been a German tax resident with a 1% or greater stake in any company (German or foreign) when they leave. The state treats your shares as sold at fair market value on departure and taxes the gain. If you are a founder or hold equity in a startup, you need to plan this years ahead, not weeks.',
        seeAlso: { url: '/glossary#wegzugsteuer', label: 'Wegzugsteuer in the glossary' },
      },
      {
        q: 'Do I need to be a tax resident somewhere?',
        a: 'Yes, ideally. "Stateless" tax residency is technically possible but it kills your banking, your treaty access, and your defensibility against your old country. You should always have a clear, documented tax home. That is what makes the rest of the structure work.',
      },
      {
        q: "What documents prove I've actually exited?",
        a: 'Your audit-defence file should include: a deregistration letter from your old tax authority, your new TRC (tax residency certificate), a lease or property contract abroad, utility bills in your name, banking statements showing local activity, flight records, and ideally a tax return filed in your new jurisdiction. Without this paper trail, even a perfect setup looks suspicious.',
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
        a: 'Paraguay, by a wide margin. Setup is around $3,500 to $5,500 all-in, takes 3 days on the ground, and you only need to visit every 3 years to maintain it. Cyprus 60-day non-dom is the closest alternative but costs €5,000 to €8,000 and requires 60 days on the ground annually. The UAE is $8,000 to $15,000 and now has 9% corporate tax.',
        seeAlso: { url: '/posts/paraguay-tax-residency-cost-2026', label: 'Full Paraguay cost breakdown' },
      },
      {
        q: 'Why Paraguay over Dubai?',
        a: 'Cost, speed, and presence requirements. Dubai now charges 9% corporate tax, requires significant time in country to maintain, has high cost of living, and getting banking right takes work. Paraguay is genuinely 0% on foreign-source income, cheap, fast, and you do not need to actually live there.',
      },
      {
        q: 'Is Portugal NHR still available?',
        a: 'No. NHR closed to new applicants on 1 January 2024. Existing holders keep their 10-year window. The replacement, IFICI, is much narrower and only fits highly-qualified employees in specific tech, research, or teaching roles tied to a Portuguese entity. Most independent nomads do not qualify.',
        seeAlso: { url: '/posts/portugal-nhr-replacement-2026', label: 'Portugal NHR is dead, what replaces it' },
      },
      {
        q: 'Can I just live in Bali, Bangkok, or Tbilisi without setting anything up?',
        a: 'You can, and many people do, but you are flying blind. You are either still tax-resident in your old country (because you did not formally exit), or you are claiming nowhere is your tax home (which most banks will not accept). Pick a defensible structure or you are one audit away from a bad year.',
      },
      {
        q: 'What about Italy, Bulgaria, or other low-tax EU options?',
        a: 'Italy has a €100,000 flat tax for high-net-worth inbound residents (good if you have €1M+ in capital gains, otherwise overkill). Bulgaria is 10% flat tax across the board. Andorra is 10% personal income tax with a high cost of entry (€30,000 to €50,000 deposit). All are workable; Paraguay is just the most flexible and cheapest.',
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
        a: "It's territorial. Paraguay only taxes income earned inside Paraguay. Foreign salaries, foreign dividends, foreign capital gains, crypto, all of it sits outside Paraguay's tax base. Tax rate on that foreign-source income: 0%. This is written into Paraguayan law, not a special incentive that can be revoked.",
        seeAlso: { url: '/posts/paraguay-tax-residency-guide', label: 'Complete Paraguay tax residency guide' },
      },
      {
        q: 'How long does Paraguay residency take to set up?',
        a: '3 days physically in Paraguay for the initial setup (immigration, police, ID office). Documents process over the following 4 months. You then need a short check-in visit before 365 days, a conversion visit before the 2-year mark for permanent residency, and after that, a visit every 3 years to maintain it.',
      },
      {
        q: 'What does Paraguay residency cost?',
        a: "NomadTaxHelp's Paraguay packages are $2,500 (Core), $3,500 (Premium), or $4,750 (Ultra+ with US LLC). Plus apostilles, flights, and hotel, you are at $3,500 to $5,500 all-in. Premium is what most clients pick.",
        seeAlso: { url: '/posts/paraguay-tax-residency-cost-2026', label: 'Full cost breakdown' },
      },
      {
        q: 'Do I actually have to live in Paraguay?',
        a: 'No. After the 3-day setup visit, you only need to visit every 3 years to maintain permanent residency. Most NTH clients live elsewhere and treat Paraguay as their tax home, not their physical home.',
      },
      {
        q: 'What documents do I need to set up?',
        a: 'Three apostilled documents: birth certificate, criminal record certificate (issued within 3 months of arrival), and marriage or divorce certificate if applicable. The criminal record timing is the most common cause of last-minute setup delays.',
      },
      {
        q: 'Can my home country still tax me after Paraguay residency?',
        a: 'Yes, if you do not exit your old residency cleanly. Paraguay residency is one half of the structure. Cleanly breaking your old country tests is the other. The clarity call is exactly to map both halves for your specific case.',
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
        a: "Yes. Paraguay isn't on the EU non-cooperative jurisdictions list, exited the FATF grey list in 2022, joined OECD CRS in 2021, and has been on the OECD BEPS Inclusive Framework since 2017. Banks worldwide recognise it. Over 30,000 people set up residency in Paraguay in 2025.",
        seeAlso: { url: '/posts/is-paraguay-tax-residency-legit', label: 'Full legitimacy deep-dive' },
      },
      {
        q: 'Will European banks accept Paraguay tax residency?',
        a: 'Yes, with the right paper trail. The standard pack is your cédula, RUC, annual TRC, lease contract, and utility bill. Without that pack no jurisdiction works. With it, every major European bank, US-friendly fintech, and global private bank will open an account.',
      },
      {
        q: 'What is OECD CRS and how does it affect me?',
        a: "The Common Reporting Standard. Banks report your account information to your country of tax residency annually. Paraguay joined CRS in 2021. CRS is good for you, not bad: it's how banks confirm you're legitimately tax-resident somewhere they can report to.",
        seeAlso: { url: '/glossary#crs', label: 'OECD CRS in the glossary' },
      },
      {
        q: 'Will my old country audit me if I move?',
        a: 'Possibly, if you do not exit cleanly. Tax authorities do not blacklist Paraguay; they check whether you still meet their own residency tests. The risk is your exit, not the destination. A clean paper trail showing you have genuinely moved is your best defence.',
      },
      {
        q: 'Is what I am doing legal?',
        a: "Yes, when done correctly. There's a clear difference between tax avoidance (legal: structuring affairs to minimise tax under the rules) and tax evasion (illegal: hiding income or lying about residency). What we coordinate is full-disclosure, fully-documented tax avoidance under written law in two jurisdictions.",
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
        a: "Yes, on foreign-source crypto. Trades on foreign exchanges and self-custody wallets sit outside Paraguay's territorial tax base. The catch: you must be Paraguay tax-resident AND cleanly out of your old country before the realisation event. Becoming Paraguayan after the sale does not help.",
        seeAlso: { url: '/posts/paraguay-crypto-tax-residency', label: 'Paraguay for crypto nomads' },
      },
      {
        q: 'What counts as a crypto realisation event?',
        a: 'Selling for fiat. Swapping one coin for another. Spending crypto. Some DeFi events. NFT trades. In most European jurisdictions, all of these are taxable events. Holding through a price increase is not.',
      },
      {
        q: 'What about crypto-to-crypto swaps?',
        a: 'A taxable event in most European jurisdictions. BTC to ETH, ETH to SOL, USDC to DAI: each one is a disposal at fair market value, with capital gains calculated against your cost basis. Plan accordingly.',
      },
      {
        q: 'How do I time a big realisation?',
        a: 'Get Paraguay residency in place, exit your old country cleanly, then realise. The order matters more than the cédula in your wallet. If you sell on Friday and become Paraguayan on Monday, the Friday sale is taxed by your old country, not Paraguay.',
      },
    ],
  },
  {
    id: 'service',
    title: 'The NomadTaxHelp Service',
    intro: "Who we are, what we do, and what we don't.",
    items: [
      {
        q: 'What exactly does NomadTaxHelp do?',
        a: 'We facilitate Paraguay tax residency for European and rest-of-world digital nomads. End-to-end: documents, in-country logistics, tax number, residency certificate, and optional US LLC formation. We coordinate with our partner team in Asunción who handle everything on the ground.',
      },
      {
        q: 'Are you tax advisers?',
        a: "No. NomadTaxHelp is a facilitator, not a law firm or tax adviser. We don't file your taxes, draft contracts, or give formal legal opinions. We coordinate with licensed partners who do. Everything on this blog is educational; specifics for your situation should be confirmed with a professional.",
      },
      {
        q: 'What is a clarity call?',
        a: 'A free 20-minute call with Felix. We map your specific situation, flag the risks, and you walk away with a one-page plan. No pitch, no obligation.',
      },
      {
        q: "Why don't you serve US citizens?",
        a: 'The US is the only country (alongside Eritrea) that taxes its citizens on worldwide income regardless of where they live. The exit involves either renouncing citizenship, claiming the Foreign Earned Income Exclusion, or a much more complex multi-jurisdiction structure. It is a different product.',
      },
      {
        q: "What if I've already moved abroad without doing this properly?",
        a: "More common than you'd think. Bring it on the call. We will work out where you actually stand under your old country's rules, what risks you have accumulated, and whether a clean retrospective fix is possible.",
      },
    ],
  },
];

// Flat list of all questions for the FAQPage JSON-LD schema generator.
export const allFaqItems: FAQItem[] = faqSections.flatMap((s) => s.items);
