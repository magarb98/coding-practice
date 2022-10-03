function solution(arr) {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) continue;
    if (sum + arr[i] > 0) sum += arr[i];
    else if (sum + arr[i] === 0 && arr[i + 1] > 0) sum += arr[i];
    else if (sum + arr[i] === 0 && sum + arr[i + 1] < 0) sum += arr[i];
    else counter++;
  }
  return counter;
}

console.log(solution([10, -10, -1, -1, 10]));
console.log(solution([-1, -1, -1, -1, 2, 2, 1]));
console.log(solution([5, -3, -2, 3]));

console.log(solution([5, -3, -2, -10, 11]));
console.log(solution([0, -5, -2, 6, 4]));
console.log(solution([10, -12, 2, -3, 10]));
console.log(solution([0, -1, -1, -1, 3, 1, 0, -1, 2, -2, -10, 25]));

//check if curr value makes sum -
//if value = 0; check if next value turns -;
