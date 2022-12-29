/* ------------------- Task 1 ------------------- */
let townName = 'Kharkiv',
    townCountry = 'Ukraine',
    townPopulation = 1.4,
    hasStadium = true;

/* ------------------- Task 2 ------------------- */
let rectWidth = 70,
    rectHeight = 40,
    rectArea = rectHeight * rectWidth;
// console.log(`${rectArea}sm`);

/* ------------------- Task 3 ------------------- */
let speedOfFirst = 95,
    speedOfSecond = 114,
    time = 2,
    distance = (speedOfFirst + speedOfSecond) * time;
// console.log(`${distance}km`);

/* ------------------- Task 4 ------------------- */
const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
  console.log(`${randomNumber} меньше 20`);
} else if (randomNumber > 50) {
  console.log(`${randomNumber} больше 50`);
} else {
  console.log(`${randomNumber} больше 20 и меньше 50`);
}

/* ------------------- Task 5 ------------------- */
switch (true) {
  case randomNumber < 20:
    console.log(`${randomNumber} меньше 20`);
    break;
  case randomNumber > 50:
    console.log(`${randomNumber} больше 50`);
    break;
  default:
    console.log(`${randomNumber} больше 20 и меньше 50`);
    break;
}