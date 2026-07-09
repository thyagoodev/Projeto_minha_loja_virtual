const produtos = [
    {
        id_produto: 1,
        descricao_produto: "Corrente Grumet Prata 925 3mm",
        valor_unitario: 189.90,
        unidade: "UN",
        caminho_imagem: "imagens/corrente-grumet-3mm.jpg",
        id_secao: 1,
        secao: "Correntes"
    },
    {
        id_produto: 2,
        descricao_produto: "Corrente Veneziana Prata 925",
        valor_unitario: 169.90,
        unidade: "UN",
        caminho_imagem: "imagens/corrente-veneziana.jpg",
        id_secao: 1,
        secao: "Correntes"
    },
    {
        id_produto: 3,
        descricao_produto: "Corrente Cartier Prata 925",
        valor_unitario: 249.90,
        unidade: "UN",
        caminho_imagem: "imagens/corrente-cartier.jpg",
        id_secao: 1,
        secao: "Correntes"
    },
    {
        id_produto: 4,
        descricao_produto: "Corrente Elo Português",
        valor_unitario: 219.90,
        unidade: "UN",
        caminho_imagem: "imagens/corrente-portugues.jpg",
        id_secao: 1,
        secao: "Correntes"
    },
    {
        id_produto: 5,
        descricao_produto: "Corrente Pipoca Prata 925",
        valor_unitario: 199.90,
        unidade: "UN",
        caminho_imagem: "imagens/corrente-pipoca.jpg",
        id_secao: 1,
        secao: "Correntes"
    },
    {
        id_produto: 6,
        descricao_produto: "Pulseira Grumet Prata 925",
        valor_unitario: 149.90,
        unidade: "UN",
        caminho_imagem: "imagens/pulseira-grumet.jpg",
        id_secao: 2,
        secao: "Pulseiras"
    },
    {
        id_produto: 7,
        descricao_produto: "Pulseira Cartier Prata 925",
        valor_unitario: 179.90,
        unidade: "UN",
        caminho_imagem: "imagens/pulseira-cartier.jpg",
        id_secao: 2,
        secao: "Pulseiras"
    },
    {
        id_produto: 8,
        descricao_produto: "Pulseira Elo Português",
        valor_unitario: 189.90,
        unidade: "UN",
        caminho_imagem: "imagens/pulseira-portugues.jpg",
        id_secao: 2,
        secao: "Pulseiras"
    },
    {
        id_produto: 9,
        descricao_produto: "Pulseira Riviera Prata 925",
        valor_unitario: 259.90,
        unidade: "UN",
        caminho_imagem: "imagens/pulseira-riviera.jpg",
        id_secao: 2,
        secao: "Pulseiras"
    },
    {
        id_produto: 10,
        descricao_produto: "Pulseira Masculina Italiana",
        valor_unitario: 229.90,
        unidade: "UN",
        caminho_imagem: "imagens/pulseira-masculina.jpg",
        id_secao: 2,
        secao: "Pulseiras"
    },
    {
        id_produto: 11,
        descricao_produto: "Anel Liso Prata 925",
        valor_unitario: 99.90,
        unidade: "UN",
        caminho_imagem: "imagens/anel-liso.jpg",
        id_secao: 3,
        secao: "Anéis"
    },
    {
        id_produto: 12,
        descricao_produto: "Anel Trançado Prata 925",
        valor_unitario: 119.90,
        unidade: "UN",
        caminho_imagem: "imagens/anel-trancado.jpg",
        id_secao: 3,
        secao: "Anéis"
    },
    {
        id_produto: 13,
        descricao_produto: "Anel Escama Italiana",
        valor_unitario: 139.90,
        unidade: "UN",
        caminho_imagem: "imagens/anel-escama.jpg",
        id_secao: 3,
        secao: "Anéis"
    },
    {
        id_produto: 14,
        descricao_produto: "Anel Pedra Zircônia",
        valor_unitario: 159.90,
        unidade: "UN",
        caminho_imagem: "imagens/anel-zirconia.jpg",
        id_secao: 3,
        secao: "Anéis"
    },
    {
        id_produto: 15,
        descricao_produto: "Anel Masculino Prata 925",
        valor_unitario: 189.90,
        unidade: "UN",
        caminho_imagem: "imagens/anel-masculino.jpg",
        id_secao: 3,
        secao: "Anéis"
    },
    {
        id_produto: 16,
        descricao_produto: "Brinco Argola Pequena",
        valor_unitario: 79.90,
        unidade: "PAR",
        caminho_imagem: "imagens/argola-pequena.jpg",
        id_secao: 4,
        secao: "Brincos"
    },
    {
        id_produto: 17,
        descricao_produto: "Brinco Argola Média",
        valor_unitario: 99.90,
        unidade: "PAR",
        caminho_imagem: "imagens/argola-media.jpg",
        id_secao: 4,
        secao: "Brincos"
    },
    {
        id_produto: 18,
        descricao_produto: "Brinco Argola Grande",
        valor_unitario: 129.90,
        unidade: "PAR",
        caminho_imagem: "imagens/argola-grande.jpg",
        id_secao: 4,
        secao: "Brincos"
    },
    {
        id_produto: 19,
        descricao_produto: "Brinco Zircônia Redondo",
        valor_unitario: 69.90,
        unidade: "PAR",
        caminho_imagem: "imagens/brinco-zirconia.jpg",
        id_secao: 4,
        secao: "Brincos"
    },
    {
        id_produto: 20,
        descricao_produto: "Brinco Coração Prata 925",
        valor_unitario: 89.90,
        unidade: "PAR",
        caminho_imagem: "imagens/brinco-coracao.jpg",
        id_secao: 4,
        secao: "Brincos"
    },
    {
        id_produto: 21,
        descricao_produto: "Pingente Cruz",
        valor_unitario: 59.90,
        unidade: "UN",
        caminho_imagem: "imagens/pingente-cruz.jpg",
        id_secao: 5,
        secao: "Pingentes"
    },
    {
        id_produto: 22,
        descricao_produto: "Pingente Espírito Santo",
        valor_unitario: 69.90,
        unidade: "UN",
        caminho_imagem: "imagens/pingente-espirito-santo.jpg",
        id_secao: 5,
        secao: "Pingentes"
    },
    {
        id_produto: 23,
        descricao_produto: "Pingente Coração",
        valor_unitario: 79.90,
        unidade: "UN",
        caminho_imagem: "imagens/pingente-coracao.jpg",
        id_secao: 5,
        secao: "Pingentes"
    },
    {
        id_produto: 24,
        descricao_produto: "Pingente Infinito",
        valor_unitario: 89.90,
        unidade: "UN",
        caminho_imagem: "imagens/pingente-infinito.jpg",
        id_secao: 5,
        secao: "Pingentes"
    },
    {
        id_produto: 25,
        descricao_produto: "Pingente Medalha São Bento",
        valor_unitario: 99.90,
        unidade: "UN",
        caminho_imagem: "imagens/pingente-sao-bento.jpg",
        id_secao: 5,
        secao: "Pingentes"
    },
    {
        id_produto: 26,
        descricao_produto: "Tornozeleira Prata 925",
        valor_unitario: 109.90,
        unidade: "UN",
        caminho_imagem: "imagens/tornozeleira.jpg",
        id_secao: 6,
        secao: "Tornozeleiras"
    },
    {
        id_produto: 27,
        descricao_produto: "Tornozeleira Elo Português",
        valor_unitario: 129.90,
        unidade: "UN",
        caminho_imagem: "imagens/tornozeleira-portugues.jpg",
        id_secao: 6,
        secao: "Tornozeleiras"
    },
    {
        id_produto: 28,
        descricao_produto: "Tornozeleira Bolinhas",
        valor_unitario: 99.90,
        unidade: "UN",
        caminho_imagem: "imagens/tornozeleira-bolinhas.jpg",
        id_secao: 6,
        secao: "Tornozeleiras"
    },
    {
        id_produto: 29,
        descricao_produto: "Escapulário Prata 925",
        valor_unitario: 179.90,
        unidade: "UN",
        caminho_imagem: "imagens/escapulario.jpg",
        id_secao: 7,
        secao: "Escapulários"
    },
    {
        id_produto: 30,
        descricao_produto: "Escapulário São Bento",
        valor_unitario: 189.90,
        unidade: "UN",
        caminho_imagem: "imagens/escapulario-sao-bento.jpg",
        id_secao: 7,
        secao: "Escapulários"
    },
    {
        id_produto: 31,
        descricao_produto: "Berloque Coração",
        valor_unitario: 49.90,
        unidade: "UN",
        caminho_imagem: "imagens/berloque-coracao.jpg",
        id_secao: 8,
        secao: "Berloques"
    },
    {
        id_produto: 32,
        descricao_produto: "Berloque Estrela",
        valor_unitario: 54.90,
        unidade: "UN",
        caminho_imagem: "imagens/berloque-estrela.jpg",
        id_secao: 8,
        secao: "Berloques"
    },
    {
        id_produto: 33,
        descricao_produto: "Berloque Lua",
        valor_unitario: 54.90,
        unidade: "UN",
        caminho_imagem: "imagens/berloque-lua.jpg",
        id_secao: 8,
        secao: "Berloques"
    },
    {
        id_produto: 34,
        descricao_produto: "Berloque Borboleta",
        valor_unitario: 59.90,
        unidade: "UN",
        caminho_imagem: "imagens/berloque-borboleta.jpg",
        id_secao: 8,
        secao: "Berloques"
    },
    {
        id_produto: 35,
        descricao_produto: "Berloque Patinha",
        valor_unitario: 59.90,
        unidade: "UN",
        caminho_imagem: "imagens/berloque-patinha.jpg",
        id_secao: 8,
        secao: "Berloques"
    },
    {
        id_produto: 36,
        descricao_produto: "Colar Ponto de Luz",
        valor_unitario: 159.90,
        unidade: "UN",
        caminho_imagem: "imagens/colar-ponto-luz.jpg",
        id_secao: 9,
        secao: "Colares"
    },
    {
        id_produto: 37,
        descricao_produto: "Colar Coração",
        valor_unitario: 169.90,
        unidade: "UN",
        caminho_imagem: "imagens/colar-coracao.jpg",
        id_secao: 9,
        secao: "Colares"
    },
    {
        id_produto: 38,
        descricao_produto: "Colar Infinito",
        valor_unitario: 179.90,
        unidade: "UN",
        caminho_imagem: "imagens/colar-infinito.jpg",
        id_secao: 9,
        secao: "Colares"
    },
    {
        id_produto: 39,
        descricao_produto: "Colar Medalha",
        valor_unitario: 189.90,
        unidade: "UN",
        caminho_imagem: "imagens/colar-medalha.jpg",
        id_secao: 9,
        secao: "Colares"
    },
    {
        id_produto: 40,
        descricao_produto: "Colar Riviera Prata 925",
        valor_unitario: 299.90,
        unidade: "UN",
        caminho_imagem: "imagens/colar-riviera.jpg",
        id_secao: 9,
        secao: "Colares"
    }
];