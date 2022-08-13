//3. Elabore um programa capaz de ler a base e a altura de um triângulo para, em seguida, escrever a sua área

import * as rs from 'readline-sync';

const B = Number(rs.question('Digite a Base do seu triangulo: '));
const H = Number(rs.question('Digite a Altura do seu triangulo: '));

const CALC: number = (B * H) / 2;

console.log(`A área do seu triângulo é ${CALC}`);