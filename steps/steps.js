function steps(n) {
    for (let i = 0; i< n; i++) {
        var line = ''
        for(let j = 0; j<= i; j++) {
            line += '* '
        }
        console.log(line);
        
    }
}

steps(5)