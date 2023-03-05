let estaChovendo: boolean = false;
estaChovendo = true;
// estaChovendo = "true";

let idade: number = 27;
let altura: number = 1.75;
const nacionalidade: string = "Brasileira";

const colegas: string[] = ["Fulano", "Siclano"];
const tecnologias: Array<string> = ["html", "css", "js"];
const notas: ReadonlyArray<number> = [7, 9, 5, 8];
tecnologias.push("java");
// notas.push() // Vai dar erro pois é somente leitura

// Tuplas
const lista: [nome:string, estaEstudando:boolean, idade:number] = ["fulano", true, 27]


// Uniontypes
let idadeDaAna: number | string = 25;
idadeDaAna = "25 anos";
// idadeDaAna = true // Vai dar erro pois essa variável somente aceita tipos number e strng


// Any -> ele aceita qualquer tipo
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = "string";

let curso = "front-end";
// curso = 10;



