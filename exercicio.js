"use strict";
// Utilizando o TypeScript e a tipagem escreva duas funções:
//uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles
//uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

function multiply(a, b) {
    console.log(a * b);
    return a * b;

}
function hello(nome) {

    console.log('olá ' + nome);
    return 'olá ' + nome;
}
multiply(10, 20);
hello('Professor');
