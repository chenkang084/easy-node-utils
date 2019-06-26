import { warning } from './logger.util';

export function convertNumberWithCommas(val: number) {
  if (isNumber(val)) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  warning(
    `the paramters:${val} of convertNumberWithCommas is null or not a number.`
  );
  return val;
}

/**
 * check the parameter if it is a number type
 * @param val
 * @returns true is a number
 */
export function isNumber(val: any) {
  return !isNaN(val);
}
