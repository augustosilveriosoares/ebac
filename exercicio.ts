// Utilizando o TypeScript e a tipagem escreva duas funções:
//uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles
//uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;



function multiply(a: number, b: number): number {
  return a * b;
}

function hello(nome: string): string {
  return 'olá ' + nome;
}


multiply(10, 20);
hello('Professor');
