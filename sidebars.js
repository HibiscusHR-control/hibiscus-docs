/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    'quick-start',
    'getting-started',
    {
      type: 'category',
      label: 'Modules',
      collapsed: false,
      items: [
        'dashboard',
        'employees',
        'payroll',
        'leave-management',
        'time-attendance',
        'onboarding-offboarding',
        'compliance',
        'performance',
        'benefits',
        'reports',
      ],
    },
    'settings',
    'faq',
  ],
};

export default sidebars;
