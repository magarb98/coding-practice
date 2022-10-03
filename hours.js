function solution(int) {
  const h = Math.floor(int / 3600);
  const m = Math.floor((int % 3600) / 60);
  const s = Math.floor((int % 3600) % 60);

  const string = `${h}h${m}m${s}s`;
  return string;
}

console.log(solution(83643));
