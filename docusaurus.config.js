// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LiveCodes",
  tagline: "Code playground that runs in the browser!",
  url: "https://livecodes.io/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "/", // Serve the blog at the site's root
          showReadingTime: true,
          editUrl: "https://github.com/live-codes/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      navbar: {
        title: "LiveCodes",
        logo: {
          alt: "LiveCodes Logo",
          src: "img/livecodes-logo.svg",
          href: "https://livecodes.io/docs",
          target: "_self",
        },
        items: [
          {
            label: "Docs",
            href: "https://livecodes.io/docs",
            target: "_self",
            position: "left",
          },
          {
            label: "SDK",
            href: "https://livecodes.io/docs/sdk",
            target: "_self",
            position: "left",
          },
          { to: "/", label: "Blog", position: "left" },
          {
            href: "https://livecodes.io/stories",
            position: "left",
            label: "Storybook",
          },
          {
            href: "https://livecodes.io/",
            label: "App",
            position: "right",
          },
          {
            href: "https://github.com/live-codes/livecodes",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Overview",
                href: "https://livecodes.io/docs/overview",
                target: "_self",
              },
              {
                label: "Why Another Playground?",
                href: "https://livecodes.io/docs/why",
                target: "_self",
              },
              {
                label: "Getting Started",
                href: "https://livecodes.io/docs/getting-started",
                target: "_self",
              },
              {
                label: "Features",
                href: "https://livecodes.io/docs/features",
                target: "_self",
              },
              {
                label: "Languages",
                href: "https://livecodes.io/docs/languages",
                target: "_self",
              },
              {
                label: "SDK",
                href: "https://livecodes.io/docs/sdk",
                target: "_self",
              },
            ],
          },
          {
            title: "LiveCodes",
            items: [
              {
                label: "App",
                href: "https://livecodes.io",
              },
              {
                label: "Starter Templates",
                href: "https://livecodes.io/?screen=new",
              },
              {
                label: "GitHub",
                href: "https://github.com/live-codes/livecodes",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/",
              },
              {
                label: "Credits",
                href: "https://livecodes.io/docs/credits",
                target: "_self",
              },
              {
                label: "License",
                href: "https://livecodes.io/docs/license",
                target: "_self",
              },
              {
                label: "Sponsor",
                href: "https://livecodes.io/docs/sponsor",
                target: "_self",
              },
              {
                label: "Contact",
                href: "https://livecodes.io/docs/contact",
                target: "_self",
              },
              {
                label: "About",
                href: "https://livecodes.io/docs/about",
                target: "_self",
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
    }),
};

module.exports = config;
