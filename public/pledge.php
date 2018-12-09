<?php

$myfile = fopen("pledges.txt", "a") or die("Unable to open file!");

$txt = file_get_contents('php://input');

fwrite($myfile, $txt.PHP_EOL);
fclose($myfile);

?>
