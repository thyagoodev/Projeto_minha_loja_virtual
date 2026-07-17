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

// ==========================================
// FUNÇÃO DE BUSCA DE CEP COM LIMPEZA AUTOMÁTICA
// ==========================================
const cepInput = document.getElementById('cep');

if (cepInput) {
    cepInput.addEventListener('blur', async () => {
        // Limpa o CEP para ter apenas números
        const cep = cepInput.value.replace(/\D/g, '');

        // SE O CEP ESTIVER VAZIO: Apaga os campos de endereço automaticamente e interrompe o código
        if (cep === "") {
            limparCamposForm();
            return;
        }

        // Se o usuário digitou algo, mas não completou 8 números
        if (cep.length !== 8) {
            alert('Por favor, digite um CEP válido com 8 números.');
            return;
        }

        const url = `https://viacep.com.br/ws/${cep}/json/`;

        try {
            if(document.getElementById('rua')) document.getElementById('rua').value = 'Buscando...';
            if(document.getElementById('bairro')) document.getElementById('bairro').value = 'Buscando...';

            const resposta = await fetch(url);
            const dados = await resposta.json();

            if (dados.erro) {
                alert('CEP não encontrado!');
                limparCamposForm();
                return;
            }

            if(document.getElementById('rua')) document.getElementById('rua').value = dados.logradouro || '';
            if(document.getElementById('bairro')) document.getElementById('bairro').value = dados.bairro || '';
            if(document.getElementById('cidade')) document.getElementById('cidade').value = dados.localidade || '';
            if(document.getElementById('estado')) document.getElementById('estado').value = dados.uf || '';

            if(document.getElementById('numero')) document.getElementById('numero').focus();

        } catch (erro) {
            console.error('Erro na API ViaCEP:', erro);
            alert('Não foi possível conectar ao serviço de CEP.');
            limparCamposForm();
        }
    });
}

// ==========================================
// ALTERNAR CAMPOS DE PAGAMENTO DINAMICAMENTE
// ==========================================
const selectPagamento = document.getElementById('pagamento');
const blocoPix = document.getElementById('detalhes-pix');
const blocoCartao = document.getElementById('detalhes-cartao');

if (selectPagamento) {
    selectPagamento.addEventListener('change', () => {
        const opcaoSelecionada = selectPagamento.value;

        if (opcaoSelecionada === 'pix') {
            blocoPix.style.display = 'block';
            blocoCartao.style.display = 'none';
        } else if (opcaoSelecionada === 'cartao_credito' || opcaoSelecionada === 'cartao_debito') {
            blocoPix.style.display = 'none';
            blocoCartao.style.display = 'block';
        }
    });
}

function limparCamposForm() {
    if(document.getElementById('rua')) document.getElementById('rua').value = '';
    if(document.getElementById('bairro')) document.getElementById('bairro').value = '';
    if(document.getElementById('cidade')) document.getElementById('cidade').value = '';
    if(document.getElementById('estado')) document.getElementById('estado').value = '';
}