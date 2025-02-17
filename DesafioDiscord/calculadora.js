var operacao;

function inSomar() {
    operacao = 1;
    document.getElementById("inOperacao").innerText = "+";
    limparDados();
}

function inSubtrair() {
    operacao = 2;
    document.getElementById("inOperacao").innerText = "-";
    limparDados();
}

function inMultiplicar() {
    operacao = 3;
    document.getElementById("inOperacao").innerText = "×";
    limparDados();
}

function inDividir() {
    operacao = 4;
    document.getElementById("inOperacao").innerText = "÷";
    limparDados();
}

function limparDados() {
    document.getElementById("inPrimeiroNumero").value = "";
    document.getElementById("inSegundoNumero").value = "";
}

function Calcular() {
    const numeroPrimeiro = Number(document.getElementById("inPrimeiroNumero").value);
    const numeroSegundo = Number(document.getElementById("inSegundoNumero").value);
    
    switch (operacao) {
        case 1:
            document.getElementById("inResultado").innerText = (numeroPrimeiro + numeroSegundo);
            break;
        case 2:
            document.getElementById("inResultado").innerText = (numeroPrimeiro - numeroSegundo);
            break;
        case 3:
            document.getElementById("inResultado").innerText = (numeroPrimeiro * numeroSegundo);
            break;
        case 4:
            document.getElementById("inResultado").innerText = (numeroPrimeiro / numeroSegundo);
            break;
        default:
            document.getElementById("inResultado").innerText = "Selecione uma operação.";
    }
}
