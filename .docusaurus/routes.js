import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', 'ed9'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'ca1'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '609'),
            routes: [
              {
                path: '/benefits',
                component: ComponentCreator('/benefits', '974'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/compliance',
                component: ComponentCreator('/compliance', '413'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/dashboard',
                component: ComponentCreator('/dashboard', 'a10'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/employees',
                component: ComponentCreator('/employees', '68b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/faq',
                component: ComponentCreator('/faq', '7c5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/getting-started',
                component: ComponentCreator('/getting-started', '5d2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '4a2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/leave-management',
                component: ComponentCreator('/leave-management', 'da4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/onboarding-offboarding',
                component: ComponentCreator('/onboarding-offboarding', '012'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/payroll',
                component: ComponentCreator('/payroll', 'b03'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/performance',
                component: ComponentCreator('/performance', '524'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/quick-start',
                component: ComponentCreator('/quick-start', 'a03'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/reports',
                component: ComponentCreator('/reports', 'f86'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/settings',
                component: ComponentCreator('/settings', '9c3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/time-attendance',
                component: ComponentCreator('/time-attendance', 'eff'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
