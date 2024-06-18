// Recupera o ID do usuário da sessão por meio de uma requisição AJAX
function fetchUserId() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_user_id.php', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const userId = this.responseText;
            alert("Seu ID é: " + userId);
        }
    };
    xhr.send();
}

document.getElementById('exibirId').addEventListener('click', fetchUserId);

document.getElementById('delete').addEventListener('click', function() {
    if (confirm('Tem certeza de que deseja excluir sua conta?')) {
        document.getElementById('action').value = 'delete';
        document.getElementById('contaForm').submit();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const excluirContaBtn = document.getElementById("delete");

    excluirContaBtn.addEventListener("click", function() {
        const idUserInput = document.getElementById("id-user").value.trim();
        
        if (idUserInput === "") {
            alert("Por favor, insira seu ID de usuário para excluir a conta.");
        } else {
            // Se o ID estiver preenchido, enviar o formulário
            document.getElementById("contaForm").submit();
        }
    });
});


document.getElementById('alterarSenha').addEventListener('click', function() {
    const idUserInput = document.getElementById('id-user');
    const hiddenIdUserInput = document.getElementById('hidden-id-user');
    const alterarSenhaForm = document.getElementById('alterarSenhaForm');

    if (idUserInput.value) {
        hiddenIdUserInput.value = idUserInput.value;
        alterarSenhaForm.style.display = 'block';
    } else {
        alert('Por favor, insira seu ID primeiro.');
    }
});
