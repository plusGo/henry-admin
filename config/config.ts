import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  extraPostCSSPlugins: [require('tailwindcss')],
  proxy: {
    '/admin-server': {
      target: 'http://localhost:8090/',
      changeOrigin: true,
      pathRewrite: { '^/admin-server': '' },
    },
  },
  devServer: {
    port: 8001,
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'henry-admin-data-center',
          entry: 'http://localhost:8002',
        },
      ],
    },
  },
});
