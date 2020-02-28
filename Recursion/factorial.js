function fact(n) {
    if (n == 0) {
        return 1;
    }

    return n * fact(n - 1);
}


var num  = 50;

console.log("Factorial of",num , ":",fact(num));
