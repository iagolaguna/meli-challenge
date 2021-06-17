
export const getAmoutAndDecimalFromPrice = (price: number) => {
  const [amount, decimals] = price.toFixed(2).split('.');
  return { amount: parseInt(amount), decimals: parseInt(decimals) };
};
