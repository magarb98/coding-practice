// Coding question completed during interview

// check input string of 'A' and 'B'; return false if no A's appear before B
// test inputs: AB, B, BAAAB, ABAA

// first solution
// does not work for single character inputs
// time complexity increase with input size
function solution_f(string) {
  if (string[0] === "A") return true;
  // check if first char is 'A'; every char after is irrelevant
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === "B") {
      if (string[i + 1] === "A") return false;
    }
  }
  // for loop checks if 'A' appears after 'B'
  return true;
  // executes if there is no 'A' in string
}

// better solution; better time complexity
// coerces any input size into two characters, maintaining the order of characters
function solution(string) {
  if (string[0] === "A") return true;
  const set = new Set(string);
  // converts input into a set
  const arr = [...set];
  // converts set into an array
  return arr.pop() === "B" ? true : false;
  // checks if last character of arr is a 'B'; meaning no 'A' characters after 'B'
}
