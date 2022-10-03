function solution(input) {
  let up = 0;
  let down = 0;
  let left = 0;
  let right = 0;

  for (char of input) {
    if (char === "^") up++;
    if (char === "v") down++;
    if (char === ">") right++;
    if (char === "<") left++;
  }

  const most = Math.max(up, down, left, right);

  return input.length - most;
}

console.log(solution("<<<"));
