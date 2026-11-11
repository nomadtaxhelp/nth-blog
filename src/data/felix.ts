// Centralised author + organisation entity data.
// Used across JSON-LD schemas, About page, post bios, and llms.txt.

export const felix = {
  name: 'Felix Yanez-Bowker',
  givenName: 'Felix',
  familyName: 'Yanez-Bowker',
  jobTitle: 'Co-Founder, NomadTaxHelp',
  description:
    'Felix helps digital nomads and remote entrepreneurs build legal, low-tax setups via Paraguay tax residency and US LLC formation.',
  image: 'https://nomadtaxhelp.com/blog/images/felix.png',
  url: 'https://nomadtaxhelp.com/blog/about',
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
  ],
};

export const organization = {
  name: 'Nomad Tax Help',
  url: 'https://nomadtaxhelp.com',
  logo: 'https://nomadtaxhelp.com/nomad-tax-help-icon.svg',
  description:
    'Paraguay residency education and practical setup coordination for digital nomads, remote workers and travelling founders.',
  email: 'hello@nomadtaxhelp.com',
  areaServed: 'Worldwide (excluding United States persons)',
  knowsAbout: [
    'Paraguay tax residency',
    'Territorial taxation',
    'US LLC formation for non-residents',
    'Tax exit strategy',
    'Digital nomad compliance',
  ],
  sameAs: [
    'https://www.instagram.com/nomadtaxhelp_/',
    'https://www.linkedin.com/company/nomad-tax-help/',
  ],
};

export const blogSite = {
  name: 'NomadTaxHelp Blog',
  url: 'https://nomadtaxhelp.com/blog',
  description:
    'Practical guides on tax residency, Paraguay setup, US LLCs, and tax exit strategy for European and rest-of-world digital nomads.',
  inLanguage: 'en',
};
