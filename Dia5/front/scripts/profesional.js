const API_URL = 'http://localhost:3000/profesional'
let profesionalsData = []

async function getProfesionals() {
  const data = await fetch(API_URL, {
    method: 'GET',
  })
  const { profesionals } = await data.json()
  profesionalsData = profesionals
}

async function createOrUpdateProfesional() {
  const name = document.getElementById('name').value.trim()
  const age = document.getElementById('age').value
  const weight = document.getElementById('weight').value
  const height = document.getElementById('height').value
  const isRetired = document.getElementById('isRetired').value
  const nationality = document.getElementById('nationality').value.trim()
  const oscarNumber = document.getElementById('oscarNumber').value
  const profession = document.getElementById('profession').value.trim()
  const profesional = {
    name,
    age: Number(age),
    weight: Number(weight),
    height: Number(height),
    isRetired: isRetired === 'true',
    nationality,
    oscarNumber: Number(oscarNumber),
    profession,
  }
  const action = document.getElementById('sendButton').textContent.trim()

  if (action === 'Crear') {
    const data = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(profesional),
    })
    const result = await data.json()
    if (result.ok) {
      await showTable()
    }
  }
  if (action === 'Actualizar') {
    const id = document.getElementById('id').value
    const data = await fetch(`${API_URL}?id=${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(profesional),
    })
    const result = await data.json()
    if (result.ok) {
      await showTable()
    }
  }
}

async function deleteProfesional(id) {
  await fetch(`${API_URL}?id=${id}`, {
    method: 'DELETE',
  })
}

async function updateProfesional(profesional) {
  document.getElementById('id').value = profesional.id
  document.getElementById('name').value = profesional.name
  document.getElementById('age').value = profesional.age
  document.getElementById('weight').value = profesional.weight
  document.getElementById('height').value = profesional.height
  document.getElementById('isRetired').value = profesional.isRetired
  document.getElementById('nationality').value = profesional.nationality
  document.getElementById('oscarNumber').value = profesional.oscarNumber
  document.getElementById('profession').value = profesional.profession
  document.getElementById('sendButton').innerHTML = 'Actualizar'
}

async function showTable() {
  await getProfesionals()
  let data = `<h1>Profesionales</h1>
    <table>
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Peso</th>
      <th>Altura</th>
      <th>En activo</th>
      <th>Nacionalidad</th>
      <th>Oscar</th>
      <th>Profesión</th>
      <th></th>
      <th></th>
    </tr>
    `
  profesionalsData.forEach((profesional) => {
    data += `<tr>
      <td>${profesional.name}</td>
      <td>${profesional.age}</td>
      <td>${profesional.weight}</td>
      <td>${profesional.height}</td>
      <td>${profesional.isRetired ? 'No' : 'Si'}</td>
      <td>${profesional.nationality}</td>
      <td>${profesional.oscarNumber}</td>
      <td>${profesional.profession}</td>
      <td>
        <button class="btn-delete" onclick='deleteProfesional("${
          profesional.id
        }")'>
            <i class="fa-regular fa-trash-can"></i>
        </button>
      </td>
      <td>
        <button class="btn-edit" onclick='updateProfesional(${JSON.stringify(
          profesional
        )})'>
            <i class="fa-solid fa-pen"></i>
        </button>
      </td>
    </tr>
  </tr>`
  })

  data += `</table>`
  document.getElementById('profesionalsSection').innerHTML = data
}
