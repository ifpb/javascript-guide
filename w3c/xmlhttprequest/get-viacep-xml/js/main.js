
function makeRequest(method, url, callback) {
  const xhr = new XMLHttpRequest()
  xhr.onload = () => callback(xhr.responseXML)
  xhr.open(method, url)
  xhr.send()
}

makeRequest('GET', 'https://viacep.com.br/ws/58015430/xml/', (response) => {
  console.log(response)
  
  // XML DOM
  console.log(response.getElementsByTagName('localidade')[0].childNodes[0].nodeValue)
})