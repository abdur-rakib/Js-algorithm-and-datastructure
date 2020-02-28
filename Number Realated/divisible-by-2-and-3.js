// ## 2.4: Divisible by 3 and 5

// ####  The problem
// For a given number, find all the numbers smaller than the number. Numbers should be divisible by 3 and also by 5.

// ## Hints
// So, you have to check two conditions: make sure the number is divisible by 3, and also by 5.
// Hence, you will need to use two conditions.



var num = 10;

for (let i = 0; i < 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);

    }

}