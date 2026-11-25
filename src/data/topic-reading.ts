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
};
