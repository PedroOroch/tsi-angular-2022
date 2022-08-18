//4. Elabore um programa que permita ao usuário informar determinada temperatura em graus Celsius e converta e exiba seus respectivos valores em graus Kelvin e Fahrenheit

import * as rs from 'readline-sync';

const TEMPC = Number(rs.question('Digite a Temperatura que deseja converter: '));
const KCALC: number = TEMPC + 273.15;
const FCALC: number = TEMPC * 1.8 + 32;

console.log(`Sua temperatura em Kelvins é: ${KCALC}`);
console.log(`Sua temperatura em Fahrenheit: ${FCALC}`);