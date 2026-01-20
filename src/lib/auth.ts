import Cookies from 'js-cookie';

const HARDCODED_EMAIL = 'user@travel.com';
const HARDCODED_PASSWORD = 'password123';

export const validateCredentials = (email: string, password: string): boolean => {
  return email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD;
};

export const setAuthToken = (token: string): void => {
  Cookies.set('auth_token', token, { expires: 7 });
};

export const getAuthToken = (): string | undefined => {
  return Cookies.get('auth_token');
};

export const removeAuthToken = (): void => {
  Cookies.remove('auth_token');
};

export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};
