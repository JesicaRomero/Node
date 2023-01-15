const fs = require('fs')
const crypto = require('crypto')

const Profesional = require('../models/profesional')

const dbPath = `${__dirname}/../database.json`

function readData() {
  const database = fs.readFileSync(dbPath, 'utf8')
  return JSON.parse(database)
}

function writeData(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 4))
}

function getProfesionals() {
  const data = readData()
  return data.profesionals
}

function createProfesional(profesional) {
  const data = readData()
  const id = crypto.randomUUID()
  const {
    name,
    age,
    weight,
    height,
    isRetired,
    nationality,
    oscarNumber,
    profession,
  } = profesional
  const newProfesional = new Profesional(
    id,
    name,
    age,
    weight,
    height,
    isRetired,
    nationality,
    oscarNumber,
    profession
  )
  data.profesionals.push(newProfesional)
  writeData(data)
}

function updateProfesional(id, profesional) {
  const data = readData()
  const index = data.profesionals.findIndex((element) => element.id === id)
  if (index === -1) return false
  data.profesionals[index] = { id, ...profesional }
  writeData(data)
  return true
}

function deleteProfesional(id) {
  const data = readData()
  const index = data.profesionals.findIndex((element) => element.id === id)
  if (index === -1) return false
  data.profesionals.splice(index, 1)
  writeData(data)
  return true
}

module.exports = {
  getProfesionals,
  createProfesional,
  updateProfesional,
  deleteProfesional,
}
