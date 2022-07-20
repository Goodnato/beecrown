<?php

while ($linha = trim(fgets(STDIN))) {
    if ($linha == "0 0") {
        break;
    }
    
    $lista = explode(" ", $linha);
    
    $x = $lista[0];
    $m = $lista[1];

    echo $x * $m . PHP_EOL;
}