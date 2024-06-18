<?php
$host = "clinicabd.mysql.uhserver.com"; // Endereço do servidor MySQL
$usuario = "clinicabduser"; // Nome do Usuário MySQL
$senha = "MarcoRyanBD2024@"; // Senha do usuário MySQL
$dbname = "clinicabd"; // Nome do banco de dados

$conexao = mysqli_connect($host, $usuario, $senha, $dbname);
// Passando parâmetros

if ($conexao->connect_error) { // Verificando se existe erro
    die("Erro de conexão: " . $conexao->connect_error);
}
?>
