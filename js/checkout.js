function confirmarPedido() {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const rua = document.getElementById("rua").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const bairro = document.getElementById("bairro").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();

    if (
        nome === "" ||
        email === "" ||
        telefone === "" ||
        cep === "" ||
        rua === "" ||
        numero === "" ||
        bairro === "" ||
        cidade === "" ||
        estado === ""
    ) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    alert("Pedido realizado com sucesso! Obrigado por comprar na Gueto Itally 925! 💎");

    localStorage.removeItem("carrinhoSessao");

    window.location.href = "../index.html";
}