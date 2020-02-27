// # 4.2 Celsius to Fahrenheit

// ## The problem
// Take the temperature in degrees Celsius and convert it to Fahrenheit.

// ## Hins:
//   To convert degrees Celsius temperature to Fahrenheit, you have to multiply by 9 and divide by 5.
   
//    And then, add 32.

function ceToFa(celcious) {
    var farenhite = (celcious * 9) / 5;
    return farenhite;
}

var celcious = 36.56;

console.log("Temp in Farenhite: ", ceToFa(celcious));
