// Coding question completed during interview

// check input string of of duplicate characters and return duplicate elements
// test inputs: codility, back, saturday, something
// expected return outputs: i, null, a, null

function solution(x) {
  const arr = x.split("");
  // splits string into an array at every character
  const set = new Set(x);
  // makes a set from string input; unique characters only from string
  const result = arr.filter((x) => {
    // higher order function used
    if (set.has(x)) {
      set.delete(x);
      // if set has a character that is also in the string array; deletes element in set
    } else return x;
    // if set does not include character in array; returns character to the filter function
    // duplicate character only deleted from set once since already removed for previous occurences
  });
  return result;
  // returns array of duplicated characters in string; can be indexed if user looking for only the first duplicate string
  // result[0]
}
