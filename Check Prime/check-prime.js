function isPrime(num) {
    if (num <=1 ) {
        return false;
    }
    else  {
        for(var i = 2; i<= Math.ceil(num/2); i++) {
            if (num % i == 0){
                return false;
            }
        }
        return true;
    }

}

console.log(isPrime(3));
