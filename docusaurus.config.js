import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Box64 for RISC-V Guide',
  favicon: 'img/favicon.ico',
  url: 'https://github.com',
  baseUrl: '/box64-for-riscv-guide/',
  organizationName: 'TraceRecursion',
  projectName: 'box64-for-riscv-guide',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig: ({
      navbar: {
        title: 'Box64 for RISC-V Guide',
        items: [
          {
            href: 'https://github.com/ptitSeb/box64',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
