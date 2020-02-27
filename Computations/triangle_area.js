// ## Triangle Area
// ---

// # The problem 
// Take three sides of a triangle. And then calculate the area of the triangle. 

// ## How it works 
// To calculate the area of the triangle. First, calculate the half of the perimeter. Here perimeter is the sum of each side of the triangle.

// Let’s call it s. 

// Then you have to perform square root of the formula like below-

function area(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area.toFixed(2);
}

var a = 10;
var b = 25;
var c = 26;
var a = area(a,b,c);
console.log("Area of this triangle: ", a);
