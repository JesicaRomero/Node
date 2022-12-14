const http = require('http')

const server = http.createServer((req, res) => {
  console.log('Petición recibida del cliente')

  const {
    url,
    method,
    headers: {
      'content-type': contentType,
      'content-length': contentLength,
      'user-agent': userAgent,
    },
  } = req

  console.log(`url: ${url}`)
  console.log(`method: ${method}`)
  console.log(`'content-type': ${contentType}`)
  console.log(`'content-length': ${contentLength}`)
  console.log(`'user-agent': ${userAgent}`)

  res.writeHead(200, { 'content-type': 'application/json' })

  switch (url) {
    case '/bye':
      res.end(JSON.stringify({ ok: true, message: 'Adios!' }))
      break
    default:
      res.end(JSON.stringify({ ok: true, message: 'Recibido!' }))
  }
})

server.listen(3000)
