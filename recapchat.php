<?php
// verificar.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sua chave secreta do reCAPTCHA
    $secret = '6Lc4CvspAAAAANJJ2BHIy7ZGv7PGMyeGh-MuyohU';
    // Resposta do reCAPTCHA
    $recaptcha_response = $_POST['g-recaptcha-response'];
    
    // Verificação com a API do reCAPTCHA
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha_response");
    $responseKeys = json_decode($response, true);
    
    if ($responseKeys["success"]) {
        echo "Verificação bem-sucedida! O formulário foi enviado.";
        // Aqui você pode processar os dados do formulário
        // Por exemplo, salvar no banco de dados, enviar um email, etc.
    } else {
        echo "Verificação do CAPTCHA falhou. Por favor, tente novamente.";
    }
} else {
    echo "Método de solicitação inválido.";
}
?>
