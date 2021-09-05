import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  define: {
    REDIRECT_URI: 'http://localhost:8001/login',
    SSO_LOGIN_URI: 'http://localhost:8000/login',
    CLIENT_ID: '111111111111111111111111111111111112',
  },
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
    master: {},
  },
  title: 'Henry',
});
