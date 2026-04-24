import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Portal Guides',
      link: {
        type: 'doc',
        id: 'portal-guide',
      },
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
    {
      type: 'category',
      label: 'Storefront Guides',
      link: {
        type: 'doc',
        id: 'storefront-guide',
      },
      items: [
        'storefront/guest-checkout',
        'storefront/sign-in',
        'storefront/checkout',
        'storefront/orders',
        'storefront/about',
        'storefront/how-it-works',
        'storefront/whatsapp-settings',
        'storefront/whatsapp-notifications',
        'storefront/account-linking',
      ],
    },
  ],
};

export default sidebars;
