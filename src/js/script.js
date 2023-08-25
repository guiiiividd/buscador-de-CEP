const inputCEP = document.getElementById("inputCEP");
const inputEndereco = document.getElementById("inputEndereco");
const inputBairro = document.getElementById("inputBairro");
const inputCidade = document.getElementById("inputCidade");
const inputUF = document.getElementById("inputUF");
const btnBuscar = document.getElementById("btnBuscar");

btnBuscar.addEventListener('click', (evt)=>{
    evt.preventDefault();

    let CEP = inputCEP.value.replace("-", "");
    
    if(CEP != ""){
      fetch(`https://brasilapi.com.br/api/cep/v1/${CEP}`)
      .then(response => response.json())
      .then(data => {
          console.log(data)
          inputEndereco.value = data.street;
          inputBairro.value = data.neighborhood;
          inputCidade.value = data.city;
          inputUF.value = data.state;
      })
      .catch(error => {
          console.error('Erro ao buscar dados da API:', error);
      });
  
      console.log("Clicou");
    }
})