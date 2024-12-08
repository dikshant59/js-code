// it is my first js code
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

//creating new function
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreKoalas = calcAverage(85, 54, 41);
const scoreDolphins = calcAverage(23, 34, 27);

const checkWinner = function (avgKoalas, avgDolphins) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphin win's (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas > 2 * avgDolphins) {
    console.log(`koala win's (${avgKoalas} vs ${avgDolphins}) `);
  } else {
    console.log(`no-one win's  `);
  }
};
checkWinner(scoreKoalas, scoreDolphins);
