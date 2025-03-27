// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o botão com o ID "btnLogin"
    const btnLogin = document.getElementById("btnLogin");

    // Verifica se o botão existe na página
    if (btnLogin) {
        // Adiciona um evento de clique ao botão
        btnLogin.addEventListener("click", function() {
            // Redireciona o usuário para a página de login
            window.location.href = "/Pages/login.html";
        });
    }
});