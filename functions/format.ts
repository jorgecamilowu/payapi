/**
 * Returns a valid money formatted string for the value.
 * Example: 5000 => $5,000
 *
 * @param x - The value to format
 * @param forceDecimals - If true, the output will show decimals, even if they are .00
 */
export function formatMoney(x: number | string, forceDecimals = false): string {
  let stringValue: string;

  if (typeof x === 'number') {
    if (x % 1 !== 0 || forceDecimals) {
      stringValue = x.toFixed(2);
    } else {
      stringValue = x.toString();
    }
  } else {
    stringValue = x;
  }

  return `$${stringValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
}
