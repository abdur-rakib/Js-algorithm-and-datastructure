var nums = [1,4,5,2,78,8,5,41,2,5,6,98,5,1,2];

var unique = [];

for(var i=0; i< nums.length; i++) {
    if(unique.indexOf(nums[i]) == -1) {
        unique.push(nums[i]);
    }
}

console.log(unique);
