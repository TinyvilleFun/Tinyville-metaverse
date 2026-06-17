export function catchFish() {

  const fish = [
    "Salmon",
    "Trout",
    "Tuna",
    "Golden Fish"
  ];

  const random =
    Math.floor(Math.random() * fish.length);

  return fish[random];
}
