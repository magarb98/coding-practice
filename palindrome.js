function solution(input) {
  const sorted = input.split("");
  const hash = {};

  for (char of sorted) {
    if (!hash[char]) {
      hash[char] = 1;
    } else {
      hash[char]++;
    }
  }

  const arr = [];
  for (val in hash) {
    arr.push(hash[val]);
  }

  if (arr.every((x) => x % 2 === 0)) return 0;

  let counter = -1;
  for (count of arr) {
    if (count % 2 !== 0) counter++;
  }
  return counter;
}

console.log(solution("ervervige"));
console.log(solution("aaabab"));
console.log(solution("x"));
console.log(solution("kayak"));
console.log(solution("rraad"));
