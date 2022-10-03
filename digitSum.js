function solution(arr) {
  let maxSum = -1;
  const hash = {};

  arr.sort().reverse();

  for (let i = 0; i < arr.length; i++) {
    let sum = addDigits(arr[i]);
    if (sum in hash) {
      let currentMax = arr[i] + hash[sum];
      if (maxSum < currentMax) {
        maxSum = currentMax;
      }
    } else {
      hash[sum] = arr[i];
    }
  }
  return maxSum;
}

function addDigits(number) {
  const letter = number.toString().split("");
  const digits = letter.map(Number);
  const sum = digits.reduce((x, y) => x + y);
  return sum;
}

console.log(solution([51, 71, 17, 42]));
console.log(solution([42, 33, 60]));
console.log(solution([51, 32, 43]));
