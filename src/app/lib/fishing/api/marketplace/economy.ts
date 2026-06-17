export function calculateMarketPrice(
  supply: number,
  demand: number
) {

  if (demand > supply)
    return demand * 2;

  return supply;
}
