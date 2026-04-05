import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hibiscus HR Docs',
  tagline: 'User guide for Canadian HR software',
  favicon: 'img/favicon.svg',

  future: { v4: true },

  url: 'https://docs.hibiscushr.ca',
  baseUrl: '/',

  organizationName: 'JTSteve12',
  projectName: 'hibiscus-docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          remarkPlugins: [],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og-image.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Hibiscus HR',
        logo: {
          alt: 'Hibiscus HR',
          src: 'img/favicon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://hibiscushr.ca',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://app.hibiscushr.ca',
            label: 'Log In',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Quick Start', to: '/quick-start' },
              { label: 'Getting Started', to: '/getting-started' },
              { label: 'FAQ', to: '/faq' },
            ],
          },
          {
            title: 'Product',
            items: [
              { label: 'Features', href: 'https://hibiscushr.ca/features' },
              { label: 'Pricing', href: 'https://hibiscushr.ca/pricing' },
              { label: 'Book a Demo', href: 'https://hibiscushr.ca/book-demo' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Privacy Policy', href: 'https://hibiscushr.ca/privacy' },
              { label: 'Terms of Service', href: 'https://hibiscushr.ca/terms' },
              { label: 'Security', href: 'https://hibiscushr.ca/security' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} 1001558036 Ontario Inc. · Operating as Hibiscus HR`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
