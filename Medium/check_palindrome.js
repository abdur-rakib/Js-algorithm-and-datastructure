var num = 404;

var str = num.toString();

strArr = str.split("");

strArr = strArr.reverse();

strArr = strArr.join("");

if (str == strArr) {
    console.log("Palindrome");
    
}
else {
    console.log("Not");
}
