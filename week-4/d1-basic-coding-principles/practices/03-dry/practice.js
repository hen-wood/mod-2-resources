const findMinOrMax = (minOrMax, ...nums) => minOrMax === 'max' ? Math.max(...nums) : Math.min(...nums)

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = findMinOrMax('max', num1, num2)
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = findMinOrMax('max', num1, num2)
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = findMinOrMax('max', sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = findMinOrMax('min', weight1, weight2);
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
