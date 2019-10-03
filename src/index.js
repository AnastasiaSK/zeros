function zeros(expression) {
  let countOfTwo = 0;
  let countOfFive = 0;
  let arr = [];

  arr = expression.split("*");
  //n!! = 2^(n/2) * (n/2)!
  //n!! = (n+1)!/ (2^((n+1)/2) * ((n+1)/2)!)
  arr.forEach(element => {
    if (element.endsWith("!!")) {
      let num = parseInt(element, 10);
      if (num % 2 === 0) {
        countOfTwo += get2Count(num);
        countOfFive += get5Count(num / 2);
      } else {
        countOfFive += get5Count(num + 1) - get5Count((num + 1) / 2);
      }
    } else {
      let num = parseInt(element, 10);
      countOfTwo += get2Count(num);
      countOfFive += get5Count(num);
    }
  });

  return Math.min(countOfTwo, countOfFive);
}
function get2Count(n) {
  const power2 = [2, 4, 8, 16, 32, 64, 128];
  let countOfTwo = 0;

  for (let index = 0; index < power2.length; index++) {
    let cntOfTwo = Math.floor(n / power2[index]);
    countOfTwo += cntOfTwo;
  }
  return countOfTwo;
}

function get5Count(n) {
  const power5 = [5, 25, 125];
  let countOfFive = 0;

  for (let index = 0; index < power5.length; index++) {
    let cntOfFive = Math.floor(n / power5[index]);
    countOfFive += cntOfFive;
  }
  return countOfFive;
}

module.exports = zeros;
