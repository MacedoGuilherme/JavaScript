var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector(".paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValido = true;

if(peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdPeso.textContent = "Peso inválido!";
}

if(altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValido = false;
    tdAltura.textContent = ("Altura inválida!");
}

if(pesoEhValido && alturaEhValido) {
    tdImc.textContent = imc;
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
}