const movieService = require('../services/movie.service')

function getMovies(req, res) {
  const movies = movieService.getMovies()
  console.log(movies)
  res.json({ movies })
}

function createMovies(req, res) {
  const movie = req.body
  movieService.createMovie(movie)
  res.json({ ok: true, message: 'Pelicula creada' })
}

function updateMovie(req, res) {
  const { id } = req.query
  const movie = req.body
  const status = movieService.updateMovie(id, movie)
  const message = status ? 'Película actualizada' : 'El id no existe'
  res.json({ ok: status, message })
}

function deleteMovie(req, res) {
  const { id } = req.query
  const status = movieService.deleteMovie(id)
  const message = status ? 'Película eliminada' : 'El id no existe'
  res.json({ ok: status, message })
}

module.exports = {
  getMovies,
  createMovies,
  updateMovie,
  deleteMovie,
}
