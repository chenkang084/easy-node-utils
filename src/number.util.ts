import { loggerUtil } from './index';

export function convertNumberWithCommas(val: number) {
  if (val) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  loggerUtil.warning(
    `the [${val}] paramters of convertNumberWithCommas is null.`
  );
  return val;
}
