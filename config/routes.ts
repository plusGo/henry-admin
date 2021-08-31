import Loading from '@/components/Loading';

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
        microAppProp: {
          autoSetLoading: true,
          className: 'myContainer',
          loader: Loading,
          wrapperClassName: 'myWrapper',
        },
      },
    ],
  },
];
