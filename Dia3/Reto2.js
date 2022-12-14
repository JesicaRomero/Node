const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('Petición recibida del cliente')
  const {
    url,
    method,
    headers: { 'user-agent': userAgent },
  } = req

  console.log(`url: ${url}`)
  console.log(`method: ${method}`)
  console.log(`'user-agent': ${userAgent}`)
  res.json({ ok: true, message: 'Recibido!' })
})

app.get('/bye', (req, res) => {
  res.json({ ok: true, message: 'Adios!' })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
