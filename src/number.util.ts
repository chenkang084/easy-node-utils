import { warning } from './logger.util';

export function convertNumberWithCommas(val: number) {
  if (val) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  warning(`the paramters:${val} of convertNumberWithCommas is null.`);
  return val;
}
