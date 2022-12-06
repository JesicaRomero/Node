printMessage(1)
setTimeout(() => {
  printMessage(2)
  printMessage(3)
}, 3000)

function printMessage(n) {
  console.log(`Mensaje ${n}`)
}
