module.exports = {
  title: "Cozie - An iOS application for watch surveys and physiological data collection",
  tagline: "Non-intrusive feedback in real-time",
  url: "https://cozie-apple.app",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "cozie-app", // Usually your GitHub org/user name.
  projectName: "cozie-apple", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Cozie",
      logo: {
        alt: "Cozie Logo",
        src: "img/logo-round.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        { to: "blog", label: "Updates", position: "left" },
        {
          href: "https://github.com/cozie-app/cozie-apple",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://cozie-fitbit.app",
          label: "Cozie Fitbit",
          position: "right",
        },
        {
          href: "https://cozie.app",
          label: "Cozie Research",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Introduction", 
              to: "docs/",
            },
          ],
        },
        {
          title: "About us",
          items: [
            {
              label: "BUDS Lab",
              href: "https://www.budslab.org",
            },
            {
              label: "Berkeley CBE",
              href: "https://cbe.berkeley.edu/",
            },
            {
              label: "Contact us",
              href: "mailto:cozie.app@gmail.com?subject=Cozie%20Apple%20Contact%20Link",
            },
            {
              label: "Forum",
              href: "https://github.com/cozie-app/cozie-apple/discussions/78",
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Updates",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/cozie-app/cozie-apple",
            },
            {
              label: "Privacy Policy",
              to: "docs/privacyPolicy",
            },
            {
              label: "Support",
              to: "docs/support",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cozie, BEARS and BUDS Lab. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: "introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/cozie-app/cozie-apple-website/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/cozie-app/cozie-apple-website/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-WC21KB6YKB',
          anonymizeIP: true,
        },
      },
    ],
  ],
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                // ... Your options.
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,

                // For Docs using Chinese, it is recomended to set:
                // language: ["en", "zh"],

                // Customize the keyboard shortcut to focus search bar (default is "mod+k"):
                searchBarShortcutKeymap: "s", // Use 'S' key
                // searchBarShortcutKeymap: "ctrl+shift+f", // Use Ctrl+Shift+F

                // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
                // forceIgnoreNoIndex: true,
            }),
        ],
    ],
};
