var num = 45;


function reverseNumber(n) {
    var rem = n % 10;
    var q = Math.floor(n / 10);
    var rev = (rem * 10) + q;
    return rev;
}

console.log(reverseNumber(num));
