const fs = require('fs');

let first = fs.readFileSync('content/test.txt', 'utf-8')
let second = fs.readFileSync('content/second.txt', 'utf-8')

console.log(first, second);

fs.writeFileSync('content/result-sync.txt', `here is the result: ${first}, ${second}`, {flag: 'a'} )

