import { request } from 'umi';
import { SafeAny } from '@/types/safe-any';
import { UserToken } from '@/types/user-token';

export async function ssoLogin(
  code: string,
  options?: { [key: string]: SafeAny },
) {
  return request<UserToken>('/admin-server/login/sso', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { code },
    ...(options || {}),
  });
}

const SESSION_STORAGE_KEY = '__session_storage_key__';

export const getUserToken = (): UserToken | null => {
  const data = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!data) {
    return null;
  }
  return JSON.parse(data);
};

export const removeUserToken = () =>
  window.sessionStorage.removeItem(SESSION_STORAGE_KEY);

export const setUserToken = (token: UserToken) =>
  window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(token));
