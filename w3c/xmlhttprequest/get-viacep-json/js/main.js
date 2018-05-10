
function makeRequest(method, url, callback) {
  const xhr = new XMLHttpRequest()
  xhr.onload = () => callback(xhr.responseText)
  xhr.open(method, url)
  xhr.send()
}

function showContent(response) {
  console.log(response)

  const cep = JSON.parse(response)
  console.log(cep.localidade)
}

makeRequest(
  'GET', 
  'https://viacep.com.br/ws/58015430/json/', 
  response => showContent(response)
)