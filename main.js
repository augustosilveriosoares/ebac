// Crie uma classe de uma abstração;
// Crie pelo menos duas classes que sejam
// herdeiras da classe criada anteriormente;
// Crie pelo menos três instâncias de objetos;
// No repositório do curso crie uma branch chamada
// oo_js e armazene o código do exercício.
//  Envie o link do repositório através da plataforma.


//CLASSE E ENCAPSULAMENTO

function Pessoa(nome, nascimento) {
  this.nome = nome;
  this.dataNascimento = nascimento;
  this.getNome = function () {
    console.log(this.nome);
  }
  this.getIdade = function () {
    console.log(new Date().getFullYear() - new Date(nascimento).getFullYear());
  }


}

//HERANÇA

function Funcionario(nome, nascimento, cargo, salario) {
  this.cargo = cargo;
  this.salario = salario;
  Pessoa.call(this, nome, nascimento);
  this.getSalario = function () {
    console.log(this.salario);
  }
  this.getCargo = function () {
    console.log(this.cargo);
  }
}

function Prestador(nome, cnpj) {
  this.cnpj = cnpj;
  Pessoa.call(this, nome);
  this.getCnpj = function () {
    console.log(this.cnpj);
  }
}

function Usuario(nome, usuario, senha) {
  this.usuario = usuario;
  this.senha = senha
  Pessoa.call(this, nome);
  this.getUserName = function () {
    console.log(this.usuario);
  }

}

const funcionario = new Funcionario('Joao', '1991-11-18', 'Aux. Administrativo', '1200');
const prestador = new Prestador('GS AR CONDICIONADO', '28.235.522/0001-58');
const usuario = new Usuario('Joao Silva', 'joao', '15156');



// POLIMORFISMO NO GET NOME
console.log('\n--------FUNCIONARIO----------------');
funcionario.getNome();
funcionario.getIdade();
funcionario.getSalario();
funcionario.getCargo();
console.log('\n--------PRESTADOR----------------');
prestador.getCnpj();
prestador.getNome();
console.log('\n--------USUARIO----------------');
usuario.getUserName();
