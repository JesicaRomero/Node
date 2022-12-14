const Profesional = require('./Profesional')
const fs = require('fs')

function readData() {
  const stringBBDD = fs.readFileSync(`${__dirname}/BBDD.json`, 'utf8')
  return JSON.parse(stringBBDD)
}

function writeData(data) {
  fs.writeFileSync(`${__dirname}/BBDD.json`, JSON.stringify(data, null, 4))
}

function getProfesionals() {
  const data = readData()
  return data.profesionals
}

function createProfesional(profesional) {
  const data = readData()
  const id = data.profesionals.length + 1
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
  data.profesionals[index] = profesional
  writeData(data)
}

function deleteProfesional(id) {
  const data = readData()
  const index = data.profesionals.findIndex((element) => element.id === id)
  data.profesionals.splice(index, 1)
  writeData(data)
}

module.exports = {
  getProfesionals,
  createProfesional,
  updateProfesional,
  deleteProfesional,
}
