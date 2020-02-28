
// # Sum of squares

// ## The problem
// Take a number as input. Then get the sum of the numbers. If the number is n. Then get

// `0^2+1^2+2^2+3^2+4^2+.............+n^2`

// ## Hints
// Once again, run a for loop with a range. Inside the loop, use the power of 2. Then add that power to a sum variable. That’s it.

var arr = [45,78,1,4,25,6];

var sum = 0;

for (let i = 0; i < arr.length; i++) {
    var square = arr[i] ** 2;
    sum += square;
}

console.log("Sum of elements: ", sum);