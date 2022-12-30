const express = require('express')
const cors = require('cors')
const functions = require('./functions')

const app = express()
const port = 3000
app.use(express.json())
app.use(cors())

app.get('/profesional', (req, res) => {
  const profesionals = functions.getProfesionals()
  res.json({ profesionals })
})
app.post('/profesional', (req, res) => {
  const profesional = req.body
  functions.createProfesional(profesional)
  res.json({ ok: true, message: 'Profesional creado' })
})
app.put('/profesional', (req, res) => {
  const { id } = req.query
  const profesional = req.body
  functions.updateProfesional(id, profesional)
  res.json({ ok: true, message: 'Profesional actualizado' })
})
app.delete('/profesional', (req, res) => {
  const { id } = req.query
  functions.deleteProfesional(id)
  res.json({ ok: true, message: 'Profesional eliminado' })
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
