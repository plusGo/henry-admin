export default [
  { path: '/', redirect: '/welcome' },
  {
    path: '/',
    component: '@/layouts/AdminLayout',
    routes: [
      { path: 'welcome', component: '@/pages/Welcome' },
      {
        path: 'data-center',
        microApp: 'henry-admin-data-center',
      },
    ],
  },
  // {
  //   component: '@/pages/NotFound',
  // },
];
