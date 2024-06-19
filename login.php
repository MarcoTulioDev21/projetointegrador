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
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Chave secreta do reCAPTCHA v3
    $secret_key = '6LcAH_wpAAAAAL0k0PtZWfptCbEDpHM-3P7Yg-ry';

    // O token reCAPTCHA enviado do formulário
    $recaptcha_response = $_POST['recaptcha_response'];

    // Verificação com o Google reCAPTCHA
    $verify_response = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret_key . '&response=' . $recaptcha_response);
    $response_data = json_decode($verify_response);

    if ($response_data->success && $response_data->score >= 0.5) {
        // Sucesso na verificação do reCAPTCHA
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        // Aqui você pode processar a mensagem, como enviá-la por email ou salvá-la em um banco de dados

        echo 'Obrigado, ' . $name . '! Sua mensagem foi recebida com sucesso.';
    } else {
        // Falha na verificação do reCAPTCHA
        echo 'Falha na verificação do reCAPTCHA. Por favor, tente novamente.';
    }
} else {
    // Se não for uma requisição POST, redirecionar para a página de contato
    header('Location: index.html');
}
?>
