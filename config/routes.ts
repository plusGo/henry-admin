export default [
  { path: 'login', component: '@/pages/Login' },
  {
    path: '/',
    component: '@/layouts/AdminLayout',
    wrappers: ['@/wrappers/Authentication'],
    routes: [
      // {path: '/', redirect: '/welcome'},
      { path: 'welcome', component: '@/pages/Welcome' },
      // {path: 'data-center', microApp: 'data-center'},
      { component: '@/pages/NotFound' },
    ],
  },
];
