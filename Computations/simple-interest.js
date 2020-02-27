
// ## The Problem
// You borrowed $5000 for 2 years with 2% interest per year.
// Calculate the simple interest to know how much you have to pay?

// ##  Hint
// Just take amount, duration and interest rate. 

var principal = 5000;
var time = 2;
var interest_rate = 2;

interest = principal * (1 + interest_rate/100) * 2
console.log("Simple Interest is: ", interest);
