"use strict";
//1. Implemente um algoritmo que leia três números e imprima na tela o produto (multiplicação) dos três números
exports.__esModule = true;
var rs = require("readline-sync");
var VALOR1 = Number(rs.question('Digite um Numero: '));
var VALOR2 = Number(rs.question('Digite outro Numero: '));
var VALOR3 = Number(rs.question('Digite mais um Numero: '));
var CALCULO = (VALOR1 * VALOR2 * VALOR3);
console.log("O valor da sua multiplica\u00E7\u00E3o: ".concat(CALCULO));
