const ACCESS_TOKEN_LOCAL_STORAGE_KEY = 'INSTACHEF_AT';
const REFRESH_TOKEN_LOCAL_STORAGE_KEY = 'INSTACHEF_RT';

export const getTokens = () => {
  if (typeof window === 'undefined') return;

  const accessToken = window.localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
  const refreshToken = window.localStorage.getItem(REFRESH_TOKEN_LOCAL_STORAGE_KEY);

  return { accessToken: accessToken || undefined, refreshToken: refreshToken || undefined };
};

export const saveTokens = (accessToken: string | undefined, refreshToken: string) => {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY, accessToken || '');
  window.localStorage.setItem(REFRESH_TOKEN_LOCAL_STORAGE_KEY, refreshToken);

  return { accessToken: accessToken || undefined, refreshToken: refreshToken || undefined };
};

export const removeTokens = () => {
  if (typeof window === 'undefined') return;

  window.localStorage.removeItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_LOCAL_STORAGE_KEY);

  return { accessToken: undefined, refreshToken: undefined };
};
