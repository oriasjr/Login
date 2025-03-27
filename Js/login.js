// Função para realizar o login
function login() {
    // Define o usuário e senha corretos
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    // Obtém os valores inseridos nos campos de usuário e senha
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // Verifica se o usuário e a senha estão corretos
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        // Redireciona para a página de sucesso
        window.location.href = "../Pages/sucesso.html";
    } else {
        // Exibe um alerta informando que o login falhou
        alert("Usuário ou senha incorretos!");
    }
}