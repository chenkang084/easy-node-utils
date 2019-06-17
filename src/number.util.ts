export function convertNumberWithCommas(x: number) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return x;
}
