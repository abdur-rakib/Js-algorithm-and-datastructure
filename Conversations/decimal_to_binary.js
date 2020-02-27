// # 4.4: Decimal to Binary

// ## The Problem
// Convert a decimal number to binary number. 

// ## Decimal vs Binaryv

// The numbers that we use every day is called decimal number. A decimal number could have any of the 10 digits (0, 1, 2, 3, 4,5 6, 7, 8, 9). 

// Hence, 232, 789, 176, 511, etc. are decimal numbers. 

// Sometimes, decimal numbers are called 10-based numbers. Because you could have 10 different digits in your number. 

// On the other hand, binary numbers use two digits (0 and 1). The word binary means two. And binary numbers use two digits. Just one and 0. Buy using these two digits binary number system can represent any numbers. 

// Some example of binary numbers re 10001, 11101, 100001, etc. 
// ## Hints
// To convert a decimal number to a binary number, you have to keep dividing the number by 2.

// While dividing, you will keep the remainder. These remainders will be used to build a binary number. 

// Then, reverse the order of the reminder, to get the binary number. 

// function decimalToBinary(n) {
//     var bits = [];

//     while (n > 0) {
//         bits.push(n % 2);
//     }
//     var bs = bits.reverse()
//     var decimal = bs.join("");
//     return decimal;
// }

// var decimal = 10;
// console.log("Binary of ", decimal, " is: ", decimalToBinary(decimal));

// ////////////////////////

//  decimal to binary



var decimal = 100;

var bin = decimal.toString(2)
console.log(bin);


// Binary to decimal

var bin = "11";

var decimal = Number.parseInt(bin, 2);
console.log(decimal);
