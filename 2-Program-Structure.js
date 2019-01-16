/* Eloquent JS Chapter 2 Excerices */

/* Looping a Triangle
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

// My Solution
let triangle = '#';
while (triangle.length <= 7) {
  console.log(triangle);
  triangle += '#';
}

// Book Solution
for (let triangle = '#'; triangle.length <= 7; triangle += '#') {
  console.log(triangle)
}

/* FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// My Solution
for (number = 1; number <= 100; number++) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz')
  } else if (number % 3 === 0) {
    console.log('Fizz')
  } else if (number % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(number)
  }
}

// Book Solution
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

/* Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

// Mine & Book Solution
let size = 8
let board = ''

for (x = 0; x < size; x++) {
  for (y = 0; y < size; y++) {
  	if ((x + y) % 2 === 0) {
      board += ' '
    } else {
      board += '#'
    }
  }
  board += '\n'
}
console.log(board)