import { history, request } from 'umi';
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

const MICRO_USER_TOKEN_KEY = '__micro_user_token_key__';

export function getUserToken(): UserToken | null {
  const data = window.sessionStorage.getItem(MICRO_USER_TOKEN_KEY);
  if (!data) {
    return null;
  }
  return JSON.parse(data);
}

export function removeUserToken() {
  window.sessionStorage.removeItem(MICRO_USER_TOKEN_KEY);
}

export function cacheUserToken(token: UserToken) {
  window.sessionStorage.setItem(MICRO_USER_TOKEN_KEY, JSON.stringify(token));
}

export function redirectToSSOLogin(): void {
  window.location.href = `${SSO_LOGIN_URI}?redirectUri=${generateRedirectUri()}&clientId=${CLIENT_ID}`;
}

function generateRedirectUri(): string {
  return encodeURIComponent(
    `${REDIRECT_URI}?redirectUri=${encodeURIComponent(
      history.location.pathname,
    )}`,
  );
}
