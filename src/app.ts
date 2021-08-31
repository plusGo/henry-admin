import { BaseIConfig } from '@umijs/types';

export function patchRoutes(config: BaseIConfig) {
  config.routes.splice(0, 0, [
    {
      path: '/',
      component: require('@/layouts/AdminLayout'),
      routes: [
        { path: 'welcome', component: '@/pages/Welcome' },
        {
          path: 'data-center',
          microApp: 'henry-admin-data-center',
        },
      ],
    },
  ]);
  config.routes.splice();
  config.routes.push({
    path: '/',
    component: '@/layouts/AdminLayout',
    routes: [
      { path: 'welcome', component: '@/pages/Welcome' },
      {
        path: 'data-center',
        microApp: 'henry-admin-data-center',
      },
    ],
  });
}

export const qiankun = fetch('/micro-app.json')
  .then((res) => {
    return res.json();
  })
  .then((apps) => {
    return { apps };
  });
