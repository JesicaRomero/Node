const fs = require('fs')

const person = { name: 'Jesica', surname: 'Romero', age: 36 }
const path = `${__dirname}/person.json`

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

setTimeout(() => {
  fs.unlink(path, (err) => {
    if (err) {
      console.log(err)
    }
  })
}, 3000)
