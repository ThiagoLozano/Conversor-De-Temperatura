function Validar() {
    var vg = document.getElementById("valor_graus").value
    if (vg == "") {
        alert('Erro: Nenhum Valor Inserido!')
    }
    else if (isNaN(vg)) {
        alert("Erro: Tipo de Dado Inválido!")
    }
    else{
        Converter()
    }
}

function Converter() {
    if (document.getElementById("unidade").value == 'f') {
        var f = document.getElementById("valor_graus").value;
        var c = (f - 32) * (5 / 9);
        document.getElementById('txt').innerHTML = Math.round(c * 100) / 100 + "°C";
    }

    else if (document.getElementById("unidade").value == 'k') {
        var k = document.getElementById("valor_graus").value;
        var c = k - 273.15;
        document.getElementById('txt').innerHTML = Math.round(c * 100) / 100 + "°C"
    }
}

