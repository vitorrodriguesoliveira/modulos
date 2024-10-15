import { somar } from "./somar.mjs";
import { multiplicar } from "./multiplicar.mjs";
import { divisao } from "./div.mjs";
import { subtracao } from "./sub.mjs";

const n1 = 5;
const n2 = 3;

const resulttsoma = somar(n1, n2);
const resultmulti = multiplicar(n1, n2);
const resultdiv = divisao(n1, n2);
const resultsub = subtracao(n1, n2);


console.log(`${n1} + ${n2} = ${resulttsoma}`);
console.log(`${n1} * ${n2} = ${resultmulti}`);
console.log(`${n1} / ${n2} = ${resultdiv}`);
console.log(`${n1} - ${n2} = ${resultsub}`);		
