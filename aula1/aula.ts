

let nome: string = 'Luiz'
let idade: number = 30
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer')
let big: bigint = 10n;

console.log(big)

// array
let arrayDeNum: Array<number> = [1, 2, 3,];
let arrayDeNum1: number[] = [1, 2, 3];
let arrayDeString: Array<string> = ['werwer', 'sdfsdf', 'dfgdfgd'];


// Obj
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    idade: 22,
    nome: "Lauriely"
};

console.log(pessoa.nome);

// fnc 

function soma(x: number, y: number) {
    return x * y
}
const result = soma(2, 3);


const sub: (x: number, y: number) => number = (x, y) => x - y

console.log(sub(2,1));