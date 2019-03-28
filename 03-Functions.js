// Eloquent JS Chapter 3 Exercises

/* Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/

// My Solution
min = (x, y) => Math.min(x, y)

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Book Solution
function min(a, b) {
  if (a < b) return a;
  else return b;
}

/* Recursion
Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/

// My Solution
isEven = (num) => {
  if (num % 2 === 0) {
    return true
  } else if (num % 2 === 1) {
    return false
  } else {
    return "negative number"
  }
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Book Solution
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

/* Bean Counting
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

// My Solution
countBs = str => countChar(str, 'B')

countChar = (str, char) => {
  let counter = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++
    }
  }
  return counter
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

// Book Solution
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}