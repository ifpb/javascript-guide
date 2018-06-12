
async function getCEP(url) {
  const response = await fetch(url)
  const json = await response.json()
  showContent(json)
}

function showContent(cep) {
  console.log(cep.localidade)
}

getCEP('https://viacep.com.br/ws/58015430/json/')