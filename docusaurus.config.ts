import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

declare const process: {
  env: Record<string, string | undefined>;
};

function normalizeBaseUrl(value: string): string {
  const trimmed = value.trim();

  if (trimmed === '' || trimmed === '/') {
    return '/';
  }

  return `/${trimmed.replace(/^\/+|\/+$/g, '')}/`;
}

const docsSiteUrl = process.env.DOCS_SITE_URL ?? 'https://docs.clickcollect.coffee';
const docsBaseUrl = normalizeBaseUrl(process.env.DOCS_BASE_URL ?? '/');

const config: Config = {
  title: 'ClickCollect Docs',
  tagline: 'Portal guides for storefront operators',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: docsSiteUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: docsBaseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'naughtybean',
  projectName: 'SaaSClickCollectDocs',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
    image: 'img/logo.svg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'ClickCollect Docs',
      logo: {
        alt: 'ClickCollect Docs Logo',
        src: 'img/logo.svg',
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
      copyright: `Copyright © ${new Date().getFullYear()} ClickCollect Docs. Built with Docusaurus 3.10.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
