let valoresConversao = {
    real: {
        dolar: 0.27,
        euro: 0.18
    },
    dolar: {
        real: 5.03,
        euro: 1.09
    },
    euro: {
        dolar: 5.47,
        real: 0.92
    }
}

let valorUsuario = document.getElementById("valor-usuario");
valorUsuario.addEventListener("keypress", function(event){

    if(event.key == "Enter"){
        // alert("Usuário digitou Enter")
        converter();
    }

});


function converter() {
    let valorUsuario = document.getElementById("valor-usuario").value;

    let moedaOrigem = document.getElementById("moeda1").value
    let moedaDestino = document.getElementById("moeda2").value

    if(valorUsuario == ""){
        alert("Valor não pode ser vazio!")
        return;
    }

    if (moedaOrigem == moedaDestino) {
        alert("As moedas são iguais, não é possível converter");
        return;
    }

    let conversao = valorUsuario * valoresConversao[moedaOrigem][moedaDestino];

    let simbolo = "";
    if(moedaDestino == "real"){
        simbolo = "R$";
    }
    if(moedaDestino == "dolar"){
        simbolo = "US$";
    }
    if(moedaDestino == "euro"){
        simbolo = "€";
    }

    

    let resultado = document.getElementById("resultado");
    resultado.textContent = simbolo + " " + conversao.toFixed(2);


}

function inverter() {
    let moeda1 = document.getElementById("moeda1").value
    let moeda2 = document.getElementById("moeda2").value

    document.getElementById("moeda1").value = moeda1
    document.getElementById("moeda2").value = moeda2

}

function limpar(){
    let valorUsuario = document.getElementById("valor-usuario");
    let resultado = document.getElementById("resultado");

    valorUsuario.value = " ";
    resultado.textContent = " ";
}