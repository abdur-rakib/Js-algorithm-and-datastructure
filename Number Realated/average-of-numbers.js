var arr = [14,25,85,94,5,82,5,8,2];

var sum = 0;

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
}

var average = (sum/arr.length).toFixed(2);
console.log("Average : ", average);