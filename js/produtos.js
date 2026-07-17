import { produtos } from "./lista_produtos.js";

const sectionCards = document.querySelector("#cards");
const inputPesquisa = document.querySelector("#pesquisa"); // Captura o input atualizado
const botoesCategoria = document.querySelectorAll("#menu_categoria a");


// Função responsável por desenhar os cards na tela
function renderizarProdutos(listaDeProdutos) {

    function filtrarCategoria(categoria) {

        if (categoria === "todos") {
            renderizarProdutos(produtos);
            return;
        }
    
        const lista = produtos.filter(produto =>
            produto.secao.toLowerCase() === categoria.toLowerCase()
        );
    
        renderizarProdutos(lista);
    }



    // Limpa a seção antes de desenhar (evita duplicar)
    sectionCards.innerHTML = "";

    // Se não encontrar nenhum produto na pesquisa
    if (listaDeProdutos.length === 0) {
        sectionCards.innerHTML = `
            <p style="text-align: center; width: 100%; grid-column: 1/-1; font-weight: bold; padding: 50px 0;">
                Nenhuma prata encontrada com esse nome... 💎
            </p>
        `;
        return;
    }

    // Monta os cards da loja
    listaDeProdutos.forEach((produto) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <span class="novo">Novo</span>

            <img src="${produto.caminho_imagem}" alt="${produto.descricao_produto}">

            <p>${produto.descricao_produto}</p>

            <h2>
                R$ ${produto.valor_unitario.toFixed(2).replace(".", ",")}
            </h2>

            <button class="btnAdicionar">
                Adicionar
            </button>
        `;

        const botao = card.querySelector("button");
        botao.addEventListener("click", () => adicionarCarrinho(produto));

        sectionCards.appendChild(card);
    });
}

// Função para adicionar o produto ao carrinho
function adicionarCarrinho(produto){
    let carrinho =
        JSON.parse(localStorage.getItem("carrinhoSessao")) || [];

    const existe = carrinho.find(
        item => item.id_produto === produto.id_produto
    );

    if(existe){
        existe.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    localStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(carrinho)
    );

    // Redireciona direto para a página do carrinho de forma segura
    window.location.href = "paginas/carrinho.html";
}

// --- LÓGICA DA BARRA DE PESQUISA (LIVE FILTER) ---
if (inputPesquisa) {
    inputPesquisa.addEventListener("input", (evento) => {
        // Pega o texto digitado e transforma em letras minúsculas (para ignorar maiúsculas/minúsculas)
        const termoPesquisa = evento.target.value.toLowerCase().trim();

        // Filtra a lista original de produtos com base no termo digitado
        const produtosFiltrados = produtos.filter((produto) => {
            return produto.descricao_produto.toLowerCase().includes(termoPesquisa);
        });

        // Atualiza a tela com as pratas filtradas
        renderizarProdutos(produtosFiltrados);
    });
}

botoesCategoria.forEach(botao => {

    botao.addEventListener("click", (e) => {

        e.preventDefault();

        const categoria = botao.dataset.categoria;

        filtrarCategoria(categoria);

    });

});

// Inicializa a página mostrando todos os produtos originais
renderizarProdutos(produtos);