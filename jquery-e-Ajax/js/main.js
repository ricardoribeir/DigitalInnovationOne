function consultaCep(){
    let cep = document.getElementById('cep').value;
    let url = "https://viacep.com.br/ws/" + cep + "/json";

    console.log(url);

  $.ajax({
    url: url,
    type: "GET",
    success: function(response){
      console.log(response);
      $("#logradouro").html(response.logradouro);
      $("#bairro").html(response.bairro);
      $("#localidade").html(response.localidade);
      $("#uf").html(response.uf);
      $("#cep-title").html("CEP: " + response.cep);
    }
  })
}