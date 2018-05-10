
function makeRequest(method, url, callback) {
  const xhr = new XMLHttpRequest()
  xhr.onload = () => callback(xhr.responseText)
  xhr.open(method, url)
  xhr.send()
}

function showContent(response) {
  console.log(response)
}

makeRequest(
  'GET', 
  'https://viacep.com.br/ws/58015430/json/?callback=showContent', 
  response => eval(response)
)