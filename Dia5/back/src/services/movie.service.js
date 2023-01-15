const fs = require('fs')
const crypto = require('crypto')

const Movie = require('../models/movie')

const dbPath = `${__dirname}/../database.json`

function readData() {
  const database = fs.readFileSync(dbPath, 'utf8')
  return JSON.parse(database)
}

function writeData(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 4))
}

function getMovies() {
  const data = readData()
  return data.movies
}

function createMovie(movie) {
  const data = readData()
  const id = crypto.randomUUID()
  const { title, releaseYear, nationality, genre } = movie
  const newMovie = new Movie(id, title, releaseYear, nationality, genre)
  data.movies.push(newMovie)
  writeData(data)
}

function updateMovie(id, movie) {
  const data = readData()
  const index = data.movies.findIndex((element) => element.id === id)
  if (index === -1) return false
  data.movies[index] = { id, ...movie }
  writeData(data)
  return true
}

function deleteMovie(id) {
  const data = readData()
  const index = data.movies.findIndex((element) => element.id === id)
  if (index === -1) return false
  data.movies.splice(index, 1)
  writeData(data)
  return true
}

module.exports = {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
}
