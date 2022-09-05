document.querySelector(".titulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); // criou variavel paciente

for (var i = 0; i < pacientes.length; i++) {
  
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); // criou variavel peso
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura"); // criou variavel altura
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){ // o if é como se fosse o se isso estiver dentro desde parametro faça isso
        console.log("peso invalido");// else seria o se nao estiver dentro deste parametro faça aquilo
        pesoEhValido = false; // ou seja if e else seria o se... senao...
        tdImc.textContent = "peso invalido"
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        console.log("altura invalida");
        alturaEhValida = false;
        tdImc.textContent = "peso invalido"
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc
    } else {
        tdImc.textContent = "altura e/ou peso invalido!";
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 500){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura < 3.0 && altura >= 0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura) {  // variavel que calcula o IMC, criando uma variavel te permite utilizala
    var imc = 0;                    // em varias partes do codigo

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}