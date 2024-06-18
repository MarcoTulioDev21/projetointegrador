let carrinho = []; // Criando array para armazenar os produtos

// Função para adicionar um produto ao carrinho
function adicionarCarrinho(nome, preco, imagem) {
    carrinho.push({ nome, preco, imagem }); // adiciona um objeto
    atualizarCarrinho(); // atualizando o carrinho
}

// Função para remover um produto do carrinho
function removerProduto(index) {
    carrinho.splice(index, 1); // remove pelo índice fornecido
    atualizarCarrinho(); 
}

// Função para atualizar o conteúdo do carrinho
function atualizarCarrinho() {
    const produtosCarrinho = document.getElementById("produtos-no-carrinho"); // puxando elemento html pelo id
    produtosCarrinho.innerHTML = ""; // limpando elemento html

    // utilizando foreach para percorrer os produtos no carrinho
    carrinho.forEach((produto, index) => {
        // Criando um elemento <li> para ser o produto no carrinho
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <span>${produto.nome}</span>
            <span>R$ ${produto.preco.toFixed(2)}</span>
            <button onclick="removerProduto(${index})">Remover</button>
        `;
        produtosCarrinho.appendChild(li); // adicionando o elemento <li> na lista de produtos no carrinho
    });

    // selecionando html pelo id correspondente
    const totalCarrinho = document.getElementById("total-carrinho");
    const carrinhoDiv = document.getElementById('carrinho');

    // Calculando o total do carrinho somando os preços de todos os produtos
    const total = carrinho.reduce((total, produto) => total + produto.preco, 0);
    totalCarrinho.innerText = total.toFixed(2); // Exibe o total do carrinho

    // Exibe ou oculta o carrinho dependendo se há produtos nele
    if (carrinho.length > 0) {
        carrinhoDiv.style.right = '0'; // Exibe o carrinho
    } else {
        carrinhoDiv.style.right = '-300px'; // Oculta o carrinho
    }
}

(function (){ // função autoexecutável
  paypal.Buttons({
createOrder: function(data, actions){   // Função que vai chamar a ordem de pagamento
  return actions.order.create({   // retorno da chamada para criar uma ordem 
  purchase_units: [{
    amount:{
      currency_code: 'BRL',
      // abaixo o valor total é calculado
      value: carrinho.reduce((total,produto)=> total + produto.preco,0)
    }
  }] 
  });
},
onApprove: function(data, actions){ // quando a compra for aprovada
  return actions.order.capture().then(function(details){
    alert('Pagamento realizado com sucesso!') // pode utilizar consolelog ou alert para exibir
    alert(details);
    gerarComprovante(); // chama a função para gerar o comprovante
    carrinho = []; // limpando carrinho
    atualizarCarrinho(); // atualizando carrinho
  })

},
onError: function(err){ // quando a compra for negada ou ocorrer algum erro
  console.error('Ocorreu um erro durante o pagamento', err);
}
  }).render('#paypal-button-container'); // renderizar o botão paypal

})(); // executa a função autoexecutável

document.getElementById('carrinho-tab').addEventListener('click', alternarCarrinho);

function alternarCarrinho() {
  const carrinho = document.getElementById('carrinho');
  if (carrinho.style.right === '0px') {
    carrinho.style.right = '-300px';
  } else {
    carrinho.style.right = '0px';
  }
}

function nextProcedimentos() {
  window.location.href = "procedimentos.html";
}

// Função para gerar o comprovante
function gerarComprovante() {
    const comprovanteContainer = document.getElementById("comprovante-container");
    const comprovanteLista = document.getElementById("comprovante-lista");
    const comprovanteTotal = document.getElementById("comprovante-total");
    
    comprovanteLista.innerHTML = ""; // Limpa a lista do comprovante

    carrinho.forEach(produto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${produto.nome}</span>
            <span>R$ ${produto.preco.toFixed(2)}</span>
        `;
        comprovanteLista.appendChild(li); // Adiciona o produto no comprovante
    });

    // Calcula o total pago
    const total = carrinho.reduce((total, produto) => total + produto.preco, 0);
    comprovanteTotal.innerText = total.toFixed(2); // Exibe o total no comprovante

    comprovanteContainer.style.display = "block"; // Exibe o comprovante
}

// Função para fechar o comprovante
function fecharComprovante() {
    const comprovanteContainer = document.getElementById("comprovante-container");
    comprovanteContainer.style.display = "none"; // Oculta o comprovante
}
