var botaoCalcular = document.querySelector(".imc__calcular");
var peso;
var altura;
var IMC;
var resultadoIMC = document.querySelector(".resultado__imc");
var abaixo = document.querySelector(".abaixo");

function calculaIMC() {
    peso = document.querySelector(".imc__peso").value;
    altura = document.querySelector(".imc__altura").value;
    IMC = peso / (altura * 2);
    resultadoIMC.innerHTML = "Seu IMC é de: " + IMC;
}

botaoCalcular.onclick = calculaIMC;