var a = 5;

var b = 7;


function swap_number(a, b) {
    var temp = a;
    a = b;
    b = temp;
    console.log(a, b);
        
}

swap_number(a, b);

// Second Approach

function swap_number(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a, b);
    
}

swap_number(a, b)