const express = require('express')
const profesionalController = require('../controllers/profesional.controller')

const router = express.Router()

router.get('/profesional', profesionalController.getProfesionals)
router.post('/profesional', profesionalController.createProfesional)
router.put('/profesional', profesionalController.updateProfesional)
router.delete('/profesional', profesionalController.deleteProfesional)

module.exports = router
