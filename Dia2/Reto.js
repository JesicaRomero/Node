const fs = require('fs/promises')
const readline = require('readline')

const path = `${__dirname}/readline-person.json`
const person = {}

function makeQuestion(query) {
  const question = new Promise((resolve, reject) => {
    const rl = readline.createInterface(process.stdin, process.stdout)
    rl.question(query, (answer) => {
      resolve(answer)
      rl.close()
    })
  })
  return question
}

makeQuestion('- What is your name?: ')
  .then((answer) => {
    person.name = answer
    return makeQuestion('- What is your surname?: ')
  })
  .then((answer) => {
    person.surname = answer
    return makeQuestion('- What is your age?: ')
  })
  .then((answer) => {
    person.age = Number(answer)
    fs.writeFile(path, JSON.stringify(person, null, 4))
  })
  .then(() => {
    console.log('Archivo guardado')
    return fs.readFile(path, 'utf8')
  })
  .then((data) => console.log(JSON.parse(data)))
  .catch((err) => console.log(err))
