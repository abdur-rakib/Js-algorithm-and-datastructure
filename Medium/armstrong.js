// # 9.3: Armstrong number. 

// ## The problem 
// Check whether a number is an Armstrong number. 

// ## Armstrong number
// Armstrong is a special number.

// A number is an Armstrong Number or narcissistic number if it is equal to the sum of its own digits raised to the power of the number of digits.
 
// Think about the number 371.  The total number of digits is 3. Now, for each digit, put the power of 3 and then add them. It will be:

function isArmstrong(n) {
    var count = 0;
    var sum = 0;

    var num = n;
    var num1 = n;

    while(num!=0) {
        num = Math.floor(num/10);
         ++count;
    }
    
    while(num1!=0) {
        var rem = num1%10;
        var q = Math.floor(num1/10);
        num1 = q;
        sum += rem **count;
    }

    if (sum == n) {
        console.log("Armstrong Number");
    } else {
        console.log("Not");
    }
}

// console.log(isArmstrong(45));
isArmstrong(45);