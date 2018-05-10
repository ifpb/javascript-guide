
function makeRequest(method, url, callback) {
  fetch(url)
    .then(res => res.json())
    .then(json => callback(json))
}

function showContent(cep) {
  console.log(cep.localidade)
}

makeRequest(
  'GET',
  'https://viacep.com.br/ws/58015430/json/',
  response => showContent(response)
)