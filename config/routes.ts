export default [
  {
    path: '/',
    component: '@/layouts/AdminLayout',
    routes: [
      // {path: '/', redirect: '/welcome'},
      { path: 'welcome', component: '@/pages/Welcome' },
      // {path: 'data-center', microApp: 'data-center'},
      // {component: '@/pages/NotFound',},
    ],
  },
];
