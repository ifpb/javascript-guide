
function makeRequest(method, url, callback) {
  const xhr = new XMLHttpRequest()
  xhr.onload = () => callback(xhr.responseText)
  xhr.open(method, url)
  xhr.send()
}

makeRequest('GET', 'https://viacep.com.br/ws/58015430/piped/', (response) => {
  console.log(response)
})