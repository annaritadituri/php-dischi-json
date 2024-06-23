<?php

header('Content-Type: application/json');
$album = file_get_contents(__DIR__ . '/album.json');

echo $album;

?>