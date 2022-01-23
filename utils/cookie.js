const HAS_WINDOW_SUPPORT = typeof window !== 'undefined';
const HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined';

const DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {};

const COOKIE_PATH_BASE = '/';

export function getCookie(params) {
  const { name: cookie_name, where = DOCUMENT, } = params;

  const name = cookie_name + '=';
  const decoded = decodeURIComponent(where.cookie); 
  const cookies = decoded.split('; ');

  let cookie;

  cookies.forEach(value => {
    if (value.indexOf(name) == 0) cookie = value.substring(name.length);
  });

  return cookie;
}

export function setCookie(params) {
  if (!HAS_WINDOW_SUPPORT) {
    return;
  }

  const { name, value, expires } = params;

  DOCUMENT.cookie = `${name}=${value};expires=${getCookieExpireTime({ expires })};path=${
    COOKIE_PATH_BASE
  }`;
}

export function getCookieExpireTime(params) {
  if (!HAS_WINDOW_SUPPORT) {
    return;
  }

  const { expires } = params;

  const date = new Date();
  date.setTime(date.getTime() + expires * 1000);
  return date.toUTCString();
}