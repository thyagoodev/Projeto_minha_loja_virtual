</script>

let subtotal = 387;
let frete = 25;
let desconto = 0;

function calcularFrete(){

    let cep = document.getElementById("cep").value;

    if(cep.length != 8){

        alert("Digite um CEP com 8 números.");

        return;

    }

    frete = 18.90;

    document.getElementById("valor-frete").innerHTML =
    "Frete: R$ " + frete.toFixed(2).replace(".",",");

    atualizarTotal();

}

function aplicarCupom(){

    let cupom = document.getElementById("cupom").value.toUpperCase();

    if(cupom == "GUETO10"){

        desconto = subtotal * 0.10;

    }else{

        desconto = 0;

        alert("Cupom inválido.");

    }

    document.getElementById("desconto").innerHTML =
    "Desconto: R$ " + desconto.toFixed(2).replace(".",",");

    atualizarTotal();

}

function atualizarTotal(){

    let total = subtotal + frete - desconto;

    document.querySelector("#total h2").innerHTML =
    "Total: R$ " + total.toFixed(2).replace(".",",");

}

</script>