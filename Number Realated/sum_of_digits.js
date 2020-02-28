var num = 45;


function sumOfDigits(num) {
    var sum = 0
    var rem = num%10;
    var q = Math.floor(num/10);
    sum = rem*10+q;
    return sum;
}

console.log("Sum of digits: ", sumOfDigits(num));