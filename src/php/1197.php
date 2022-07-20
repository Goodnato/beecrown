<?php

while ($linha = trim(fgets(STDIN))) {    
    $lista = explode(" ", $linha);
    
    $v = $lista[0];
    $t = $lista[1];

    echo $v * ($t * 2) . PHP_EOL;
}