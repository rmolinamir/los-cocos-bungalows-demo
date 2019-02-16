export const parseDiscountedPrice = (price, discount) => {
  // Parsing the price string then multiplying by the discount. 
  // First we globally replace all commas for a decimal dot notation.
  // Afterwards we remove the € sign.
  let newPrice = (price.replace(/,/g, '.').replace('€', '') * discount).toFixed(2);
  // Back to the decimal comma notation.
  newPrice = `€${String(newPrice).replace('.', ',')}`;
  return newPrice;
}
