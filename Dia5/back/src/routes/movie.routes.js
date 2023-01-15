const express = require('express')
const movieController = require('../controllers/movie.controller')

const router = express.Router()

router.get('/movie', movieController.getMovies)
router.post('/movie', movieController.createMovies)
router.put('/movie', movieController.updateMovie)
router.delete('/movie', movieController.deleteMovie)

module.exports = router
