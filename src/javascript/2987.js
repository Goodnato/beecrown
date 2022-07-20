let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n').map(val => val.replace('\r', '').replace('\n', '')).filter(val => val !== '');

let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

console.log(alfabeto.indexOf(lines.shift()) + 1);