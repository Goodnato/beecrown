let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n').map(val => val.replace('\r', '').replace('\n', '')).filter(val => val !== '')

let T = parseInt(lines.shift());
let N;
for (let i = 0; i < T; i++) {
    N = parseInt(lines.shift());
    
    console.log(N*(N+1)/2+1)
}