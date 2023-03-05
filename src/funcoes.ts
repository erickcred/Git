function calculaArea(base: number, altura: number): number {
    return base * altura;
}

const calculaArea2 = (base: number, altura: number): number => base * altura;

function somar(...numeros: number[]): void {
    // return numeros.reduce((total, itemAtual) => {
    //     return total += itemAtual;
    // }, 0);
    console.log(numeros);
}
console.log(somar(1, 2, 10));

function teste() : string | number {
    if (10 > 5) {
        return "dez maior que 5";
    } else {
        return 5;
    }
}
const resutadoDeTeste = teste(); // pode ser string ou number