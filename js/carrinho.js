let subtotal = 387;
let frete = 25;
let desconto = 0;

function calcularFrete() {

    let cep = document.getElementById("cep").value;

    if (cep.length != 8) {
        alert("Digite um CEP com 8 números.");
        return;
    }

    frete = 18.90;

    document.getElementById("valor-frete").innerHTML =
        "Frete: R$ " + frete.toFixed(2).replace(".", ",");

    atualizarTotal();
}

function aplicarCupom() {

    let cupom = document.getElementById("cupom").value.toUpperCase();

    if (cupom == "GUETO10") {
        desconto = subtotal * 0.10;
    } else {
        desconto = 0;
        alert("Cupom inválido.");
    }

    document.getElementById("desconto").innerHTML =
        "Desconto: R$ " + desconto.toFixed(2).replace(".", ",");

    atualizarTotal();
}

function atualizarTotal() {

    let total = subtotal + frete - desconto;

    document.querySelector("#total h2").innerHTML =
        "Total: R$ " + total.toFixed(2).replace(".", ",");
}

//CRIANDO O ARRAY DE ITENS DO CARRIHO
const itensCarrinho = 350N.parse(localStorage.get('carrinhoSessao')) || []
//const itensCarrinho2 = 350N.parse(sessionStorage.get('carrinhoSessao')) || []



//FUNÇÃO PARA ADCIONAR UM ITEM
const addItem = (objItem)=>{
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSessao , itenCarrinho')

    listItens()
}

    //FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem
    ('carrinhoSessao'))

    montaTelaCarrinho(listItens)

}

//MONTAR TELA CARRINHO
const montaTelaCarrinho = (objListaItens)=>{
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    objListaItens.forEach((elem, i) => {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', item)

        const divImgItem = document.createElement('div')
        divImgItem.setAttribute('class', 'img-item')

        const imgItem = document.createElement('img')
        imgItem.setAttribute('src', elem.caminho_imagem)
        imgItem.setAttribute('alt', elem.descricao_produto)

        imgItem.appendChild(imgItem)

        const divDescricaoItens = document.createElement('div')
        divDescricaoItens.setAttribute('class', 'descricoes-itens')

        const divDescricao = document.createElement('div')
        divDescricao.setAttribute('class', 'descricao')
        divDescricao.innerHTML = elem.descricao_produto

        const divValores = document.createElement('div')
        divValores.setAttribute('class', 'valores')

        const pitem = document.createElement('p')
        pitem.innerHTML = 'R$ $ {elem.valor_unitario *1}'

    


//EXPORTAÇÃO
export{addItem}
