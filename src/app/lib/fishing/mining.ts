export function mineOre() {

  const ores = [
    "Coal",
    "Iron",
    "Silver",
    "Gold",
    "Diamond"
  ];

  return ores[
    Math.floor(Math.random() * ores.length)
  ];
}
