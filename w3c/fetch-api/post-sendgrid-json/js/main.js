const email = {
  "personalizations": [
    {
      "to": [
        { "email": "example@example.com" }
      ]
    }
  ],
  "from": { "email": "example@example.com" },
  "subject": "Hello, World!",
  "content": [
    {
      "type": "text/plain",
      "value": "Heya!"
    }
  ]
}

async function makeRequest(method, url, data, callback) {
  const init = {
    method: method,
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: data
  }
  const response = await fetch(url, init)
  const json = await response.json()
  callback(json)
}

function showContent(response) {
  console.log(response)
}

makeRequest(
  'POST', 
  'https://api.sendgrid.com/v3/mail/send',
  email,
  response => showContent(response)
)