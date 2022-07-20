let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n').map(val => val.replace('\r', '').replace('\n', '')).filter(val => val !== '')

let n = parseInt(lines.shift());
let contador = 1;
let result = [];
let calc;

while (true) {
    calc = fatorial(contador) + result.reduce((a, b) => a + b, 0);

    if(calc < n) {
        contador++;
        continue;
    }

    if(calc > n) {
        contador--;
    }
    
    result.push(fatorial(contador));
    contador = 1;

    if (result.reduce((a, b) => a + b) == n) {
        console.log(result.length);
        break;
    }
}

function fatorial (n) {
    let result = 1;
    for (let index = n; index > 0; index--) {
        result *= index;
    }

    return result;
}