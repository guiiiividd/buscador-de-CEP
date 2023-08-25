const inputCEP = document.getElementById("inputCEP");
const inputEndereco = document.getElementById("inputEndereco");
const inputBairro = document.getElementById("inputBairro");
const inputCidade = document.getElementById("inputCidade");
const inputUF = document.getElementById("inputUF");
const btnBuscar = document.getElementById("btnBuscar");
const spanCEPInvalido = document.getElementById("spanCEPInvalido")

btnBuscar.addEventListener('click', (evt)=>{
  evt.preventDefault();
  limparCampos();

  let CEP = inputCEP.value.replace("-", "");
  
  if(CEP != ""){
    fetch(`https://brasilapi.com.br/api/cep/v1/${CEP}`)
    .then(response => response.json())
    .then(data => {
      inputEndereco.value = data.street;
      inputBairro.value = data.neighborhood;
      inputCidade.value = data.city;
      inputUF.value = data.state;
    })
    .catch(error => {
      console.error('Erro ao buscar dados da API:', error);
    });
  }else{
    spanCEPInvalido.style.display = "block"
  }
})

function limparCampos(){
  inputEndereco.value = "";
  inputBairro.value = "";
  inputCidade.value = "";
  inputUF.value = ""; 
  spanCEPInvalido.style.display = "none"
}