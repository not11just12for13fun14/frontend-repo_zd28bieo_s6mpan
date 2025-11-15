export const TOKEN_KEY = 'vdla_jwt_token';

export function saveToken(token) {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (e) {}
}

export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY) || '';
  } catch (e) {
    return '';
  }
}

export function removeToken() {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (e) {}
}

export function isAuthenticated() {
  const token = getToken();
  return Boolean(token);
}
