<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Incluindo a conexão com o banco de dados
    include("conexao.php");

    // Recebendo os dados do formulário
    $nome = $_POST['nome'];
    $endereco = $_POST['endereco'];
    $email = $_POST['email'];
    $idade = $_POST['idade'];
    $senha = md5($_POST['senha']); // Aplicando MD5 na senha recebida
    $telefone = $_POST['telefone'];

    // Criando a consulta SQL para inserção dos dados
    $sql = "INSERT INTO clientes (nome, endereco, email, idade, senha, telefone) VALUES ('$nome','$endereco','$email','$idade','$senha','$telefone')";

    // Executando a consulta SQL
    if(mysqli_query($conexao, $sql)){
        $id_cadastrado = mysqli_insert_id($conexao);
        header("refresh:3;url=login.html");
    } else {
        echo "ERRO: Não foi possível cadastrar-se." . mysqli_error($conexao);
    }

    // Fechando a conexão com o banco de dados
    mysqli_close($conexao);
}
?>
