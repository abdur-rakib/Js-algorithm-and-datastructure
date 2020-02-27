// # 6.4 Gravitational Force

// ## The Problem
// Compute gravitational force between two objects. 

// ## Hint
// The formula for gravitational force is 

// `F = G m^1m^2/r^2`

// Here G is the gravitational constant. Its value is 6.673*10-11

// // So, take three input from the users. The mass of the first object, the mass of the second object and the distance between them.  

const G = 6.673 * (10 **-11)

function gravitationalForce(m1, m2, r) {
    var gForce = (G*m1*m2)/(r*r);
    return gForce;
}

var m1 = 100;
var m2 = 200;
var r = 50;

console.log("Gravitional Force: ", gravitationalForce(m1, m2, r));
