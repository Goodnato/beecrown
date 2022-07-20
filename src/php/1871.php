<?php

while (true) {    
    $linha = trim(fgets(STDIN));

    if ($linha == "0 0") {
        break;
    }

    $lista = explode(" ", $linha);
    
    $m = $lista[0];
    $n = $lista[1];
    
    $soma = $m + $n;

    echo str_replace("0", "", $soma) . PHP_EOL;
}