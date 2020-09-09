# Conversor De Temperatura - WEB

> Uma página que faz conversões de temperatura.

# Tecnologias Utilizadas
* **_HTML 5;_**
* **_CSS 3;_**
* **_JavaScript._**


# Exemplo de Uso

### Função de Validação:
```
function Validar() {
    // Pega o valor do elemento de id 'valor_grayus'.
    var vg = document.getElementById("valor_graus").value
    // Condições.
    if (vg == "") {
        // Caso valor seja vazio.
        alert('Erro: Nenhum Valor Inserido!')
        document.getElementById('txt').innerHTML = "0°C";

    }
    // Caso valor não seja um número.
    else if (isNaN(vg)) {
        alert("Erro: Tipo de Dado Inválido!")
        document.getElementById('txt').innerHTML = "0°C";
        document.getElementById('valor_graus').value = "";
    }
    else {
        // Caso esteja tudo certo.
        ConverterF()
    }
}
```
![]()

### Função de Conversão:
```
function ConverterF() {
    // Condições.
    // Se valor do elemento de id de nome 'unidade' == 'f' (Farhrenheit).
    if (document.getElementById("unidade").value == 'f') {
        // Pega o valor do id de nome 'valor_graus' e cria a fórmula de conversão (°F > °C).
        var f = document.getElementById("valor_graus").value;
        var c = (f - 32) * (5 / 9);
        // Mostra resultado no id de nome 'txt'.
        document.getElementById('txt').innerHTML = Math.round(c * 100) / 100 + "°C";
    }
    // Se valor do elemento de id de nome 'unidade' == 'K' (kelvin).
    else if (document.getElementById("unidade").value == 'k') {
        // Pega o valor do id de nome 'valor_graus' e cria a fórmula de conversão (°K > °C).
        var k = document.getElementById("valor_graus").value;
        var c = k - 273.15;
        // Mostra resultado no id de nome 'txt'.
        document.getElementById('txt').innerHTML = Math.round(c * 100) / 100 + "°C"
    }
}
```
![]()

### Página WEB:
```

```
![]()

# Bibliotecas e Configurações

### Bootstrap
```
CSS3: <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

Google Fontes:
```
![]()

