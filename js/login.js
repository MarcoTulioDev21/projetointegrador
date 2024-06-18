// Abaixo API para login com Google
window.onload = function () {
  google.accounts.id.initialize({
      client_id: "959130787214-mps2ngammocen07m6hmdfur5m351bngf.apps.googleusercontent.com",
      callback: handleCredentialResponse // Call back para retornar sucesso
  });
  google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      {
          type: "standard",
          shape: "rectangular",
          theme: "outline",
          text: "signin_with",
          size: "large",
          locale: "pt-BR"
      }
  );  
}
function handleCredentialResponse(response) {
  // Redirecionando o cliente para a tela do painel se o login bem-sucedido
  window.location.href = "produtos.html";
}