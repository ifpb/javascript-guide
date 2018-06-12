
async function sendMail(email, title, body) {
  const url = 'https://api.sendgrid.com/v3/mail/send'
  const data = {
    "personalizations": [
      {
        "to": [
          { "email": "example@example.com" }
        ]
      }
    ],
    "from": { "email": "example@example.com" },
    "subject": title,
    "content": [
      {
        "type": "text/plain",
        "value": body
      }
    ]
  }
  const init = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: data
  }
  const response = await fetch(url, init)
  const json = await response.json()
  console.log(response)
}

sendMail(email, "Hello, World!", "Heya!")