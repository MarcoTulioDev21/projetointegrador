<?php
if ($_SERVER['REQUEST_METHOD'] == "POST"){ 
    include("conexao.php");
 
    // Recebendo os dados do formulário
    $email = $_POST['loginEmail'];
    $senha = md5($_POST['loginSenha']); // Aplicando MD5 na senha recebida

    // Consulta SQL para verificar se o email e senha correspondem
    $sql = "SELECT * FROM clientes WHERE email='$email' AND senha='$senha'";
    $resultado = mysqli_query($conexao, $sql);

    if ($resultado) {
        if (mysqli_num_rows($resultado) == 1) {
            $row = mysqli_fetch_assoc($resultado);
            session_start();
            $_SESSION['user_id'] = $row['id']; // Armazenando o ID do usuário na sessão
            header("Location: produtos.html");
            exit(); // Finaliza a execução
        } else {
            header("Location: login.html");
            exit();
        }
    } else {
        echo "Erro na consulta: " . mysqli_error($conexao);
    }

    mysqli_close($conexao); // Terminando conexão
}
?>
