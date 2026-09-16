/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'intro',
        'quick-start',
        'getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Core Modules',
      collapsed: false,
      items: [
        'dashboard',
        'employees',
        'payroll',
        'partner-draws',
        'time-attendance',
        'leave-management',
      ],
    },
    {
      type: 'category',
      label: 'Firm Operations',
      collapsed: false,
      items: [
        'credentials',
        'professional-dues',
        'benefits',
        'compliance',
      ],
    },
    {
      type: 'category',
      label: 'Records',
      collapsed: false,
      items: [
        'onboarding-offboarding',
        'reports',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'integrations',
      ],
    },
    {
      type: 'category',
      label: 'Employee Experience',
      collapsed: true,
      items: [
        'employee-portal',
      ],
    },
    {
      type: 'category',
      label: 'Account',
      collapsed: true,
      items: [
        'settings',
        'faq',
      ],
    },
  ],
};

export default sidebars;
