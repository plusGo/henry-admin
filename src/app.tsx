import { getMicroAppConfig } from '@/services/micro-app-config';
import React from 'react';
import AuthProvider from '@/components/AuthProvider';

let extraRoutes: any[] = [];

export function patchRoutes({ routes }: any) {
  extraRoutes.forEach((element) => {
    routes[0].routes.unshift(element);
  });
}

export function render(oldRender: any) {
  Promise.resolve([]).then((routes) => {
    extraRoutes = routes;
    oldRender();
  });
}

export const qiankun = getMicroAppConfig().then((res) => {
  return Promise.resolve(res);
});

export function rootContainer(container: any) {
  return React.createElement(AuthProvider, null, container);
}
