/* ---------------------------- Task 1 ---------------------------- */
for (let i = 10; i <= 50; i++) {
  if (i % 2 == 0) {
    // console.log(i);
  }
}

/* ---------------------------- Task 2 ---------------------------- */
let user = {
  firtName: 'Ihor',
  lastName: 'Panov',
  age: 28,
  hasPet: true
};
// console.log(user);

/* ---------------------------- Task 3 ---------------------------- */
const array = [
  'я в Симбирск,',
  'в трактире.',
  'с утра',
  'В ту же ночь',
  'Я остановился',
  'для закупки', 
  'что и было поручено Савельичу.',
  'приехал,',
  'где должен был',
  'нужных вещей',
  'отправился по лавкам',
  'пробыть сутки',
  'Савельич'
];
const correctOrder = [3, 7, 0, 8, 11, 5, 9, 6, 4, 1, 12, 2, 10];
let newArray = [];

const removeComma = (str) => {
  return str.replace(',', '');
};

const addComma = (str) => {
  return `${str},`;
};

for (let i = 0; i < correctOrder.length; i++) {
  if (i == 1) {
    let newValue = removeComma(array[correctOrder[i]]);
    array[correctOrder[i]] = newValue;
  } else if (i == 6) {
    let newValue = addComma(array[correctOrder[i]]);
    array[correctOrder[i]] = newValue;
  }
  newArray.push(array[correctOrder[i]]);
}

let result = newArray.join(' ');
// console.log(result);

/* ---------------------------- Task 4 ---------------------------- */
const firstName = 'Ihor',
      lastName = 'Panov';

const getFullName = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);
}

getFullName(firstName, lastName);

/* ---------------------------- Task 5 ---------------------------- */
let startNum = 21;

while (startNum <= 67) {
  if (startNum % 2 != 0) {
    console.log(startNum);
  }
  startNum++;
}