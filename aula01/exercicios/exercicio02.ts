//2. Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final ponderada deste aluno. Considerar o peso das notas como 2, 3 e 5, respectivamente


import * as rs from 'readline-sync';

const VALOR1 = Number(rs.question('Digite sua Primeira nota: '));
const VALOR2 = Number(rs.question('Digite sua Segunda nota: '));
const VALOR3 = Number(rs.question('Digite sua Terceira nota: '));

const CALCULO: number = (VALOR1 * 0.2) + (VALOR2 * 0.3) + (VALOR3 * 0.5);

console.log(`O valor da sua média final é: ${CALCULO}`);