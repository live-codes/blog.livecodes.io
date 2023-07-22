// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LiveCodes',
  tagline: 'Code Playground That Just Works!',
  url: 'https://livecodes.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/', // Serve the blog at the site's root
          showReadingTime: true,
          editUrl: 'https://github.com/live-codes/blog.livecodes.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: 'LiveCodes',
        logo: {
          alt: 'LiveCodes Logo',
          src: 'img/livecodes-logo.svg',
          href: 'https://livecodes.io/docs',
          target: '_self',
        },
        items: [
          {
            label: 'Docs',
            href: 'https://livecodes.io/docs',
            target: '_self',
            position: 'left',
          },
          {
            label: 'SDK',
            href: 'https://livecodes.io/docs/sdk',
            target: '_self',
            position: 'left',
          },
          { to: '/', label: 'Blog', position: 'left' },
          {
            href: 'https://livecodes.io/stories',
            position: 'left',
            label: 'Storybook',
          },
          {
            href: 'https://livecodes.io/',
            label: 'App',
            position: 'right',
          },
          {
            href: 'https://github.com/live-codes/livecodes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                href: 'https://livecodes.io/docs/overview',
                target: '_self',
              },
              {
                label: 'Why Another Playground?',
                href: 'https://livecodes.io/docs/why',
                target: '_self',
              },
              {
                label: 'Getting Started',
                href: 'https://livecodes.io/docs/getting-started',
                target: '_self',
              },
              {
                label: 'Features',
                href: 'https://livecodes.io/docs/features',
                target: '_self',
              },
              {
                label: 'Languages',
                href: 'https://livecodes.io/docs/languages',
                target: '_self',
              },
              {
                label: 'SDK',
                href: 'https://livecodes.io/docs/sdk',
                target: '_self',
              },
            ],
          },
          {
            title: 'LiveCodes',
            items: [
              {
                label: 'App',
                href: 'https://livecodes.io',
              },
              {
                label: 'Starter Templates',
                href: 'https://livecodes.io/?screen=new',
              },
              {
                label: 'Import...',
                href: 'https://livecodes.io/?screen=import',
              },
              {
                label: 'Bookmarklet',
                href: 'https://livecodes.io/docs/bookmarklet',
                target: '_self',
              },
            ],
          },
          {
            title: 'Info',
            items: [
              {
                label: 'Credits',
                href: 'https://livecodes.io/docs/credits',
                target: '_self',
              },
              {
                label: 'License',
                href: 'https://livecodes.io/docs/license',
                target: '_self',
              },
              {
                label: 'Sponsor 💚',
                href: 'https://livecodes.io/docs/sponsor',
                target: '_self',
              },
              {
                label: 'Contact',
                href: 'https://livecodes.io/docs/contact',
                target: '_self',
              },
              {
                label: 'About us',
                href: 'https://livecodes.io/docs/about',
                target: '_self',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/live-codes/livecodes',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/livecodes_io',
              },
              {
                label: 'Dev',
                href: 'https://dev.to/livecodes_io',
              },
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/livecodes',
              },
              {
                html: '<a href="https://status.livecodes.io" target="_blank" rel="noopener noreferrer" class="footer__link-item status-link"><span>Status</span><svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>',
              },
            ],
          },
        ],
        copyright: `<br /> Released under the MIT License <br />
        Copyright © ${new Date().getFullYear()}
        <a href="https://github.com/hatemhosny" target="_blank" rel="noopener noreferrer">Hatem Hosny</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'H9Z2PKYS80',
        apiKey: 'a97b58cd17c1aa51274222d1db75d839',
        indexName: 'livecodes',
        contextualSearch: true,
        replaceSearchResultPathname: {
          from: '/docs/',
          to: 'https://livecodes.io/docs/',
        },
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),
  scripts: [
    {
      src: 'https://unpkg.com/prettier@2.4.1/standalone.js',
      async: true,
    },
    {
      src: 'https://unpkg.com/prettier@2.4.1/parser-babel.js',
      async: true,
    },
    {
      src: 'https://unpkg.com/prettier@2.4.1/parser-html.js',
      async: true,
    },
    {
      src: 'https://media.ethicalads.io/media/client/ethicalads.min.js',
      async: true,
      defer: true,
    },
    {
      src: 'https://widget.kapa.ai/kapa-widget.bundle.js',
      'data-website-id': 'c5e9cf39-ef75-4290-becc-151b380252a3',
      'data-project-name': 'LiveCodes',
      'data-project-color': '#44494F',
      'data-project-logo': 'https://avatars.githubusercontent.com/u/90906587?s=280&v=4',
      async: true,
    },
  ],
  headTags: [
    {
      // this adds a placeholder element to avoid "no ad placements found" error
      // when react is loaded, this element is removed and ad is loaded manually
      tagName: 'script',
      attributes: {
        type: 'ea-placeholder',
        id: 'ea-placeholder',
        'data-ea-publisher': 'livecodesio',
        'data-ea-manual': 'true',
      },
    },
  ],
};

module.exports = config;
