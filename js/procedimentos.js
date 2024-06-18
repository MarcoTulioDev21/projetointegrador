document.getElementById('whatsapp-button').addEventListener('click', function() {
    window.open('https://wa.me/31981218580', '_blank');
});

// Define uma função para rolar suavemente até a seção de procedimentos
function scrollToProcedimentos(){
    const procedimentosSection = document.getElementById('procedimento-sobrancelha');
    procedimentosSection.scrollIntoView({ behavior: 'smooth' });
}

// Adiciona um ouvinte de evento de soltura de tecla ao input com id 'searchbar'
document.getElementById('searchbar').addEventListener('keyup', search_procedimento);

// Define a função search_procedimento para filtrar a lista de cartões
function search_procedimento() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let cards = document.getElementsByClassName('procedimentos-card');
    
    // Itera sobre cada cartão na lista
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let produtoName = card.querySelector('#produto-name').textContent.toLowerCase();
        // Verifica se o nome do produto contém o texto digitado no input
        if (produtoName.includes(input)) {
            card.style.display = ""; //
        } else {
            card.style.display = "none"; 
        }
    }
}
