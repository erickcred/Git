"use strict";
function calculaArea(base, altura) {
    return base * altura;
}
const calculaArea2 = (base, altura) => base * altura;
function somar(...numeros) {
    // return numeros.reduce((total, itemAtual) => {
    //     return total += itemAtual;
    // }, 0);
    console.log(numeros);
}
console.log(somar(1, 2, 10));
function teste() {
    if (10 > 5) {
        return "dez maior que 5";
    }
    else {
        return 5;
    }
}
const resutadoDeTeste = teste(); // pode ser string ou number
