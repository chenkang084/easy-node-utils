export function isIE(): Boolean {
  const ua = window.navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/
  const is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;

  return is_ie;
}
