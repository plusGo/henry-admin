import { request } from 'umi';
import { SafeAny } from '@/types/safe-any';
import { ServerMasterOptions } from '@/types/server-master-options';

export async function getMicroAppConfig(options?: { [key: string]: SafeAny }) {
  return request<ServerMasterOptions>('/admin-server/microAppConfig', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
