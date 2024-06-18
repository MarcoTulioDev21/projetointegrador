document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form'); // Buscando elemento com query selector

    form.addEventListener('submit', function(event) {
        var idadeInput = document.getElementById('idade');
        var idade = parseInt(idadeInput.value);

        if (idade < 18) {
            alert('Você precisa ter pelo menos 18 anos para se cadastrar.');
            event.preventDefault(); // Evita que o formulário seja enviado
        }else if(idade > 125){
            alert('Insira uma idade válida.')
            event.preventDefault()
        }
    });
    // Validando a idade do usuário
});