import { getMicroAppConfig } from '@/services/micro-app-config';
//
// let extraRoutes: any[] = [];
//
// export function patchRoutes({routes}: any) {
//   console.log('patchRoutes')
//
//   extraRoutes.forEach((element) => {
//     routes[0].routes.unshift(element);
//   });
//   console.log(routes)
// }
//
// export function render(oldRender: any) {
//   console.log('render')
//   Promise.resolve([]).then(routes => {
//     extraRoutes = routes;
//     oldRender();
//   })
// }

export const qiankun = getMicroAppConfig();
