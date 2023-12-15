// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos
// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
//•  Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma.

const aluno = {
  nome: 'João Carlos',
  nota: 10
}
const aluno1 = {
  nome: 'Rafael Pires',
  nota: 6.1
}
const aluno2 = {
  nome: 'Zica King Kong',
  nota: 5.9
}
const aluno3 = {
  nome: 'Filipe Falção',
  nota: 4.9
}

const aluno4 = {
  nome: 'Maria Luzes',
  nota: 6
}



const alunos = [aluno, aluno1, aluno2, aluno3, aluno4];


function aprovados(alunos) {
  alunos.map(function (aluno) {
    if (aluno.nota >= 6) {
      console.log(`Aluno: '${aluno.nome} | Nota: ${aluno.nota} --> APROVADO`);
    }
  })

}

aprovados(alunos);
