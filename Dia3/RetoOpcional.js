const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  const { name } = req.query
  res.send(name)
})

app.post('/', (req, res) => {
  const { name, surname, age } = req.body
  const person = { name, surname, age }
  res.json(person)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
