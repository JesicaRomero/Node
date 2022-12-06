const fs = require('fs')
const readline = require('readline')
const process = require('process')

const rl = readline.createInterface(process.stdin, process.stdout)
const path = `${__dirname}/readline-person.json`
const person = {}

rl.question('- What is your name?: ', (answer) => {
  person.name = answer

  rl.question('- What is your surname?: ', (answer) => {
    person.surname = answer

    rl.question('- What is your age?: ', (answer) => {
      person.age = Number(answer)

      rl.close()

      fs.writeFile(path, JSON.stringify(person, null, 4), (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log('Archivo guardado')
        }
      })

      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          console.log(err)
        } else {
          const person = JSON.parse(data)
          console.log(person)
        }
      })
    })
  })
})
