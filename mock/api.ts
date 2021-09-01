export default {
  'GET /admin-server/microAppConfig': {
    apps: [
      {
        name: 'data-center',
        entry: '//localhost:8002',
      },
    ],
    routes: [
      {
        path: '/data-center',
        microApp: 'data-center',
        microAppProps: {
          autoSetLoading: true,
        },
      },
    ],
  },
};
