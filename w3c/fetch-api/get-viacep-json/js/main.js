
function getCEP(url) {
  fetch(url)
    .then(res => res.json())
    .then(json => showContent(json))
}

function showContent(cep) {
  console.log(cep.localidade)
}

getCEP('https://viacep.com.br/ws/58015430/json/')