<?php
header("Content-Type: application/json; charset=utf-8");

echo json_encode([
    ["id" => 1, "name" => "Яна", "mail" => "anakrukovich@gmail.com"],
    ["id" => 2, "name" => "София", "mail" => "sofiaqueen@gmail.com"],
    ["id" => 3, "name" => "Эвелина", "mail" => "gingergirl@gmail.com"],
    ["id" => 4, "name" => "Маргарита", "mail" => "margoshka_kartoshka@gmail.com"]
]);
