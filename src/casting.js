"use strict";
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed(2);
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
    // as unknown conversão para um tipo desconhecido 
    let nome = 35;
    // parseInt("35");
    // parseFloat("10");
    // 10.toString();
})(casting || (casting = {}));
