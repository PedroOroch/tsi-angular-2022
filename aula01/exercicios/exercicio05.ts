//5. Uma pessoa com pouco tempo disponível joga uma partida de CS de 30 minutos a cada dia, 3 dias por semana. Monte a fórmula e escreva um programa que calcule e exibe na tela quanto tempo, em horas, a pessoa terá dedicado ao jogo ao final de um ano

import * as rs from 'readline-sync';

const GAMEP = 0.5; //30 minutos para horas dá 0,5 horas
const DIAS = 3;

let horaDedic = GAMEP * (24 * 365) / DIAS;

console.log(`A quantidade de horas dedicadas no final do ano é ${horaDedic}`);

/*

30min / 60min = 0,5hr 

30 minutos por dia e 3 dias por semana

1 semana tem 7 dias

1 ano tem 365 dias


*/