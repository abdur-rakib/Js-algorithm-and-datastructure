


function vowels(line) {
    const vowelSet = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of line.toLowerCase()) {
        if (vowelSet.includes(char)) {
            count ++;
        }
    }
    return count;
}
line = "This is fun dude!!!";
console.log(vowels(line));


