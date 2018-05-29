export function centsToDollar(cent, decimal = 2) {
  return (cent / 100).toFixed(decimal);
}