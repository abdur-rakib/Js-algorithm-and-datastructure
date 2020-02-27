// # 6.2: Compound Interest

// ## The Problem
// Take money borrowed, interest and duration as input. Then, compute the compound interest rate.



// ###   Hint
// Compound interest formula is:
// ```python
// A = P(1+r/100)t
// ```

// Here, P is the principal amount; it is the amount that you borrowed. r is the interest rate in percentage and t is the time.


function compoundInterest(principle, interest_rate, time) {
    interest = principle * ((1 + interest_rate/100) * time);
    return interest
}

var principle = 20000;
var interest_rate = 1;
var time = 365;


console.log("Interest Amount: ", compoundInterest(principle, interest_rate, time));
