// Função validar.
function Validar() {
    // Pega o valor do elemento de id 'valor_grayus'.
    var vg = document.getElementById("valor_graus").value
    // Condições.
    if (vg == "") {
        // VCaso valor seja vazio.
        alert('Erro: Nenhum Valor Inserido!')
        document.getElementById('txt').innerHTML = "0°F";

    }
    // Caso valor não seja um número.
    else if (isNaN(vg)) {
        alert("Erro: Tipo de Dado Inválido!")
        document.getElementById('valor_graus').value = "";
    }
    else {
        // Caso esteja tudo certo.
        ConverterF()
    }
}

function ConverterF() {
    // Condições.
    // Se valor do elemento de id de nome 'unidade' == 'f' (Farhrenheit).
    if (document.getElementById("unidade").value == 'c') {
        // Pega o valor do id de nome 'valor_graus' e cria a fórmula de conversão (°F > °C).
        var c = document.getElementById("valor_graus").value;
        var f = (c * 9 / 5) + 32;
        // Mostra resultado no id de nome 'txt'.
        document.getElementById('txt').innerHTML = Math.round(f * 100) / 100 + "°F";
    }
    // Se valor do elemento de id de nome 'unidade' == 'K' (kelvin).
    else if (document.getElementById("unidade").value == 'k') {
        // Pega o valor do id de nome 'valor_graus' e cria a fórmula de conversão (°K > °C).
        var k = document.getElementById("valor_graus").value;
        var f = (k - 273.15) * (9 / 5) + 32;
        // Mostra resultado no id de nome 'txt'.
        document.getElementById('txt').innerHTML = Math.round(f * 100) / 100 + "°F"
    }
}
