//  6.3 Calculate grades

//   The problem
// Calculate grade of five subjects. 


var numbersOfFiveSub = [90, 85, 89, 88, 95]

var sum = 0;

for (var i = 0; i < numbersOfFiveSub.length; i++) {
    sum += numbersOfFiveSub[i];
}
var average = Math.round((sum / 5));


switch (Math.ceil(average / 10)) {
    case 10:
        console.log('Grade: A');
        break;
    case 9:
        console.log('Grade: A');
        break;
    case 8:
        console.log('Grade: B');
        break;
    case 7:
        console.log('Grade: C');
        break;
    case 6:
        console.log('Grade: D');
        break;
    default:
        console.log('Grade: F');
        

}