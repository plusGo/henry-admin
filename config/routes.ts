export default [
  { path: '/', redirect: '/welcome' },
  {
    path: '/',
    component: '@/layouts/AdminLayout',
    routes: [
      { path: 'welcome', component: '@/pages/Welcome' },
      {
        name: 'henry-admin-data-center',
        icon: 'smile',
        path: 'data-center',
        microApp: 'henry-admin-data-center',
      },
    ],
  },
];
