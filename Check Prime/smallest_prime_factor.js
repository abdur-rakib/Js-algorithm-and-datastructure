function isPrime(num) {
    if (num <= 1) {
        return false;
    } else {
        for (var i = 2; i <= Math.ceil(num / 2); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

}



var num = 39;

for (var i = 2; i <= num; i++) {
    if (num % i == 0) {
        var res = isPrime(i);
        if (res) {
            console.log(i);
            break;
        }
    }
}