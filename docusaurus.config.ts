import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ClickCollect.coffee Docs',
  tagline: 'Operational guides for branded order-ahead coffee storefronts.',
  favicon: 'img/ClickCollectLogo1024x1024.png',

  future: {
    v4: true,
  },

  url: 'https://docs.clickcollect.coffee',
  baseUrl: '/',
  organizationName: 'NaughtyBeanConsulting',
  projectName: 'SaaSClickCollectDocs',

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'ClickCollect.coffee Docs',
      logo: {
        alt: 'ClickCollect.coffee logo',
        src: 'img/ClickCollectLogo1024x1024.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Portal Guides',
        },
        {
          href: 'https://clickcollect.coffee/',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://clickcollect.coffee/portal/',
          label: 'Portal',
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
              label: 'Portal guide',
              to: '/docs/portal-guide',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'ClickCollect.coffee',
              href: 'https://clickcollect.coffee/',
            },
            {
              label: 'Portal login',
              href: 'https://clickcollect.coffee/portal/',
            },
          ],
        },
        {
          title: 'Sections',
          items: [
            {
              label: 'Branding',
              to: '/docs/portal/branding',
            },
            {
              label: 'Shop Manager',
              to: '/docs/portal/shop-manager',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ClickCollect.coffee. Documentation for independent coffee operators.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
