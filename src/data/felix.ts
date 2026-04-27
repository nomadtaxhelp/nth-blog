// Centralised author + organisation entity data.
// Used across JSON-LD schemas, About page, post bios, and llms.txt.

export const felix = {
  name: 'Felix Yanez-Bowker',
  givenName: 'Felix',
  familyName: 'Yanez-Bowker',
  jobTitle: 'Co-Founder, NomadTaxHelp',
  description:
    'Felix helps digital nomads and remote entrepreneurs build legal, low-tax setups via Paraguay tax residency and US LLC formation.',
  image: 'https://blog.nomadtaxhelp.com/images/felix.jpg',
  url: 'https://blog.nomadtaxhelp.com/about',
  email: 'hello@nomadtaxhelp.com',
  knowsAbout: [
    'Tax residency',
    'Paraguay residency',
    'Territorial taxation',
    'Digital nomad tax planning',
    'US LLC formation for non-US persons',
    'OECD Common Reporting Standard',
    'UK Statutory Residence Test',
    'EU exit tax rules',
    'Cross-border tax structuring',
  ],
  sameAs: [
    'https://www.linkedin.com/in/felix-yanez-bowker-b23270252/',
    'https://felixyanez.substack.com/',
    'https://fascinated-princess-801.notion.site/About-Me-54522f72ef6a470aa87711bb889cd30c',
    'https://nomadtaxhelp.com',
  ],
};

export const organization = {
  name: 'NomadTaxHelp',
  legalName: 'NomadTaxHelp',
  url: 'https://nomadtaxhelp.com',
  logo: 'https://blog.nomadtaxhelp.com/logo.svg',
  description:
    'Tax residency facilitation for digital nomads and remote entrepreneurs. Paraguay residency, US LLC formation, and tax exit strategy.',
  email: 'hello@nomadtaxhelp.com',
  foundingDate: '2024',
  areaServed: 'Worldwide (excluding United States persons)',
  knowsAbout: [
    'Paraguay tax residency',
    'Territorial taxation',
    'US LLC formation for non-residents',
    'Tax exit strategy',
    'Digital nomad compliance',
  ],
  sameAs: [
    'https://www.instagram.com/nomadtaxhelp_',
    'https://blog.nomadtaxhelp.com',
  ],
};

export const blogSite = {
  name: 'NomadTaxHelp Blog',
  url: 'https://blog.nomadtaxhelp.com',
  description:
    'Practical guides on tax residency, Paraguay setup, US LLCs, and tax exit strategy for European and rest-of-world digital nomads.',
  inLanguage: 'en',
};
