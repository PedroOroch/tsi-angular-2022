//1. Implemente um algoritmo que leia três números e imprima na tela o produto (multiplicação) dos três números

import * as rs from 'readline-sync';

const VALOR1 = Number(rs.question('Digite um Numero: '));
const VALOR2 = Number(rs.question('Digite outro Numero: '));
const VALOR3 = Number(rs.question('Digite mais um Numero: '));

const CALCULO: number = (VALOR1 * VALOR2 * VALOR3);

console.log(`O valor da sua multiplicação: ${CALCULO}`);