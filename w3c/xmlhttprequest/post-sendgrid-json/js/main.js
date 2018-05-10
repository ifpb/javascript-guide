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

function makeRequest(method, url, data, callback) {
  const xhr = new XMLHttpRequest()
  xhr.onload = () => callback(xhr.responseText)
  xhr.setRequestHeader("Authorization", "Bearer YOUR_API_KEY")
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.open(method, url)
  xhr.send(data)
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