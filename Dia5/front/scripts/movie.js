const API_URL = 'http://localhost:3000/movie'
let moviesData = []

async function getMovies() {
  const data = await fetch(API_URL, {
    method: 'GET',
  })
  const { movies } = await data.json()
  moviesData = movies
}

async function createOrUpdateMovie() {
  const title = document.getElementById('title').value.trim()
  const releaseYear = document.getElementById('releaseYear').value
  const nationality = document.getElementById('nationality').value.trim()
  const genre = document.getElementById('genre').value.trim()

  const movie = {
    title,
    releaseYear: Number(releaseYear),
    nationality,
    genre,
  }
  const action = document.getElementById('sendButton').textContent.trim()

  if (action === 'Crear') {
    const data = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(movie),
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
      body: JSON.stringify(movie),
    })
    const result = await data.json()
    if (result.ok) {
      await showTable()
    }
  }
}

async function deleteMovie(id) {
  await fetch(`${API_URL}?id=${id}`, {
    method: 'DELETE',
  })
}

async function updateMovie(movie) {
  document.getElementById('id').value = movie.id
  document.getElementById('title').value = movie.title
  document.getElementById('releaseYear').value = movie.releaseYear
  document.getElementById('nationality').value = movie.nationality
  document.getElementById('genre').value = movie.genre
  document.getElementById('sendButton').innerHTML = 'Actualizar'
}

async function showTable() {
  await getMovies()
  let data = `<h1>Películas</h1>
  <table>
  <tr>
    <th>Título</th>
    <th>Año de estreno</th>
    <th>Nacionalidad</th>
    <th>Género</th>
    <th></th>
    <th></th>
  </tr>
  `
  moviesData.forEach((movie) => {
    data += `<tr>
    <td>${movie.title}</td>
    <td>${movie.releaseYear}</td>
    <td>${movie.nationality}</td>
    <td>${movie.genre}</td>
    <td>
      <button class="btn-delete" onclick='deleteMovie("${movie.id}")'>
          <i class="fa-regular fa-trash-can"></i>
      </button>
    </td>
    <td>
      <button class="btn-edit" onclick='updateMovie(${JSON.stringify(movie)})'>
          <i class="fa-solid fa-pen"></i>
      </button>
    </td>
  </tr>
</tr>`
  })

  data += `</table>`
  document.getElementById('moviesSection').innerHTML = data
}
