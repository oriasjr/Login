function login() {
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        window.location.href = "../sucesso/sucesso.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}