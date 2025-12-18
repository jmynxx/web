<?php
header("Content-Type: application/json; charset=utf-8");

echo json_encode([
    ["id" => 1, "name" => "Яна", "age" => 18, "mail" => "anakrukovich@gmail.com"],
    ["id" => 2, "name" => "София", "age" => 19, "mail" => "sofiaqueen@gmail.com"],
    ["id" => 3, "name" => "Эвелина", "age" => 19, "mail" => "gingergirl@gmail.com"],
    ["id" => 4, "name" => "Маргарита", "age" => 18, "mail" => "margoshka_kartoshka@gmail.com"]
]);
