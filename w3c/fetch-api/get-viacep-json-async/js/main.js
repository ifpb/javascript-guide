
async function makeRequest(method, url, callback) {
  const response = await fetch(url)
  const json = await response.json()
  callback(json)
}

function showContent(cep) {
  console.log(cep.localidade)
}

makeRequest(
  'GET',
  'https://viacep.com.br/ws/58015430/json/',
  response => showContent(response)
)