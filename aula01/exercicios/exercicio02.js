"use strict";
//2. Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final ponderada deste aluno. Considerar o peso das notas como 2, 3 e 5, respectivamente
exports.__esModule = true;
var rs = require("readline-sync");
var VALOR1 = Number(rs.question('Digite sua Primeira nota: '));
var VALOR2 = Number(rs.question('Digite sua Segunda nota: '));
var VALOR3 = Number(rs.question('Digite sua Terceira nota: '));
var CALCULO = (VALOR1 * 0.2) + (VALOR2 * 0.3) + (VALOR3 * 0.5);
console.log("O valor da sua m\u00E9dia final \u00E9: ".concat(CALCULO));
