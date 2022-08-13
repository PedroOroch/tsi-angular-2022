"use strict";
//3. Elabore um programa capaz de ler a base e a altura de um triângulo para, em seguida, escrever a sua área
exports.__esModule = true;
var rs = require("readline-sync");
var B = Number(rs.question('Digite a Base do seu triangulo: '));
var H = Number(rs.question('Digite a Altura do seu triangulo: '));
var CALC = (B * H) / 2;
console.log("A \u00E1rea do seu tri\u00E2ngulo \u00E9 ".concat(CALC));
