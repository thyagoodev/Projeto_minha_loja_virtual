// Recupera o carrinho do localStorage ou começa com uma lista vazia
let carrinho = JSON.parse(localStorage.getItem("carrinhoSessao")) || [];
let valorFrete = 0;
let valorDesconto = 0;

const corpoTabela = document.getElementById("corpo-tabela");
const resumoSubtotal = document.getElementById("resumo-subtotal");
const resumoFrete = document.getElementById("resumo-frete");
const resumoTotal = document.getElementById("resumo-total");

// Desenha as pratas na tabela do carrinho
function renderizarCarrinho() {
    if (!corpoTabela) return;

    if (carrinho.length === 0) {
        corpoTabela.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 20px; color: #333; font-weight: bold;">
                    Seu carrinho da Gueto Itally está vazio! 💎
                </td>
            </tr>
        `;
        atualizarTotais(0);
        return;
    }

    corpoTabela.innerHTML = ""; 
    let subtotalGeral = 0;

    carrinho.forEach((produto, index) => {
        // Corrige o caminho das imagens para a pasta paginas/
        const caminhoCorrigido = produto.caminho_imagem.startsWith("../") 
            ? produto.caminho_imagem 
            : `../${produto.caminho_imagem}`;

        const subtotalItem = produto.valor_unitario * produto.quantidade;
        subtotalGeral += subtotalItem;

        corpoTabela.innerHTML += `

        <tr>
        <td>${produto.descricao_produto}</td>
    
        <td>
            <img src="${caminhoCorrigido}" alt="${produto.descricao_produto}" width="60">
        </td>
    
        <td>
            <input
                type="number"
                min="1"
                step="1"
                value="${produto.quantidade}"
                onchange="alterarQuantidade(${index}, this.value)"
                style="width:60px; text-align:center;"
            />
        </td>
    
        <td>
            R$ ${produto.valor_unitario.toFixed(2).replace(".", ",")}
        </td>
    
        <td>
            R$ ${subtotalItem.toFixed(2).replace(".", ",")}
        </td>
    
        <td>
            <button
                class="btn-remover"
                onclick="removerProduto(${index})">
                🗑️
            </button>
        </td>
    
    </tr>
        `;
    });

    atualizarTotais(subtotalGeral);
}

// Controla os botões de + e -
window.alterarQuantidade = function(index, novaQuantidade) {

    novaQuantidade = parseInt(novaQuantidade);

    if (isNaN(novaQuantidade) || novaQuantidade < 1) {
        alert("Digite apenas números inteiros maiores que zero.");
        renderizarCarrinho();
        return;
    }

    carrinho[index].quantidade = novaQuantidade;

    localStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(carrinho)
    );

    renderizarCarrinho();
}

// Atualiza o painel lateral com a soma dos valores
function atualizarTotais(subtotal) {
    const totalFinal = Math.max(0, subtotal + valorFrete - valorDesconto);

    if(resumoSubtotal) resumoSubtotal.innerText = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;
    if(resumoFrete) resumoFrete.innerText = `R$ ${valorFrete.toFixed(2).replace(".", ",")}`;
    if(resumoTotal) resumoTotal.innerText = `Total: R$ ${totalFinal.toFixed(2).replace(".", ",")}`;
}

// Simula o cálculo de frete
window.calcularFrete = function() {
    const cep = document.getElementById("cep").value;
    if (cep.trim() === "") {
        alert("Por favor, digite um CEP.");
        return;
    }
    
    valorFrete = 25.00;
    document.getElementById("valor-frete").innerText = `Frete: R$ ${valorFrete.toFixed(2).replace(".", ",")}`;
    renderizarCarrinho();
}

// Simula o cupom GUETO10
window.aplicarCupom = function() {
    const cupom = document.getElementById("cupom").value.toUpperCase();
    
    if (cupom === "GUETO10") {
        valorDesconto = 10.00;
        document.getElementById("desconto").innerText = `Desconto: R$ ${valorDesconto.toFixed(2).replace(".", ",")}`;
        alert("Cupom de R$ 10,00 aplicado! 💸");
    } else {
        valorDesconto = 0;
        document.getElementById("desconto").innerText = `Desconto: R$ 0,00`;
        alert("Cupom inválido.");
    }

    renderizarCarrinho();
}

// Finaliza a compra limpando o carrinho
window.finalizarCompra = function() {

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    window.location.href = "finalizar_compra.html";
}

window.removerProduto = function(index) {

    if(confirm("Deseja remover este produto do carrinho?")){

        carrinho.splice(index, 1);

        localStorage.setItem(
            "carrinhoSessao",
            JSON.stringify(carrinho)
        );

        renderizarCarrinho();

    }

}


renderizarCarrinho();