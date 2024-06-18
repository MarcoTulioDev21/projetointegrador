<?php
session_start();
include 'conexao.php';

// Verificação da Sessão e Definição do ID do Usuário
if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
} else {
    $user_id = null;
}

// Lógica para alterar senha
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['id-user']) && isset($_POST['action'])) {
    $id_user = $_POST['id-user'];
    $action = $_POST['action'];
    if ($action == 'update-password') {
        $new_password = md5($_POST['new-password']); // Aplicando MD5 na nova senha
        if ($id_user == $user_id) {
            $sql = "UPDATE clientes SET senha = '$new_password' WHERE id = $id_user";
            if (mysqli_query($conexao, $sql)) {
                echo "<script>alert('Senha alterada com sucesso!'); window.location.href = 'conta.html';</script>";
            } else {
                echo "Erro ao alterar a senha: " . mysqli_error($conexao);
            }
        } else {
            echo "<script>alert('ID incorreto!'); window.location.href = 'conta.html';</script>";
        }
    }
}

// Lógica para excluir a conta
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['id-user']) && isset($_POST['action'])) {
    $id_user = $_POST['id-user'];
    $action = $_POST['action'];

    if ($action == 'delete') {
        if ($id_user == $user_id) {
            $sql = "DELETE FROM clientes WHERE id = $id_user";
            if (mysqli_query($conexao, $sql)) {
                session_destroy(); // Destruir a sessão após excluir a conta
                echo "<script>alert('Conta excluída com sucesso!'); window.location.href = 'login.html';</script>";
                exit(); // Finaliza a execução
            } else {
                echo "Erro ao excluir a conta: " . mysqli_error($conexao);
            }
        } else {
            echo "<script>alert('ID incorreto!'); window.location.href = 'conta.html';</script>";
            exit(); // Finaliza a execução
        }
    }
}
?>
