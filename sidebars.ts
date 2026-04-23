import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'portal-guide',
    {
      type: 'category',
      label: 'Portal Guides',
      items: [
        'portal/branding',
        'portal/billing',
        'portal/locations',
        'portal/team',
        'portal/shop-manager',
        'portal/domains',
        'portal/settings',
      ],
    },
  ],
};

export default sidebars;
