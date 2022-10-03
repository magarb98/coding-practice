function solution(string) {
  let b = 0;
  let a = 0;
  let n = 0;

  for (char of string) {
    if (char === "B") b++;
    if (char === "A") a++;
    if (char === "N") n++;
  }

  const totalB = Math.floor(b / 1);
  const totalA = Math.floor(a / 3);
  const totalN = Math.floor(n / 2);

  const val = Math.min(totalA, totalB, totalN);
  return val;
}

console.log(solution("BANANABANANw"));
