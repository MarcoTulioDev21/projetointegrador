<?php
session_start();
if (isset($_SESSION['user_id'])) {
    echo $_SESSION['user_id'];
} else {
    echo "Não foi possível localizar seu ID. \nVocê acessou com o Google? Leia: Termos e Condições \nAcessou normal? Saia e faça o login novamente.";
}
?>
