<?php
$d = trim(fgets(STDIN));
$box = explode(" ", trim(fgets(STDIN)));
$result = 'S';

foreach ($box as $value) {
    if ($d > $value) {
        $result = 'N';
        break;
    }
}

echo $result . PHP_EOL;