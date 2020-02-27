var nums = [45,85,98,56,25,35,49];

var large = nums[0]
for (var i = 1; i< nums.length; i++) {
    if (nums[0] < nums[i]) {
        nums[0] = nums[i];
    }
}
console.log("Largest Number: ", nums[0]);


// /////Another solution//////////

var m = Math.max(...nums);
console.log(m);


