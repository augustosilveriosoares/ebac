$(document).ready(function () {
  // $('#cep').mask('00000-000');

  $("#form").on("submit", function (event) {
    event.preventDefault();
    var cep = $('#cep').val();
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    $('#botao').addClass('disabled');

    fetch(url).then(function (dados) {
      return dados.json();
      console.log(dados);
    }).then(function (j) {
      var log = j.logradouro + ', ' + j.bairro + ', ' + j.localidade + '-' + j.uf;
      $('#adress').val(log);

    }).catch(function (e) {
      alert('Erro, tente novamente');
    }).finally(function () { $('#botao').removeClass('disabled') });


  });
});
