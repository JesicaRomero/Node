class Movie {
  id
  title
  releaseYear
  nationality
  genre
  constructor(id, title, releaseYear, nationality, genre) {
    this.id = id
    this.title = title
    this.releaseYear = releaseYear
    this.nationality = nationality
    this.genre = genre
  }
}

module.exports = Movie
