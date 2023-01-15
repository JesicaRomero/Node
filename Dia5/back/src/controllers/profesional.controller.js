const profesionalService = require('../services/profesional.service')

function getProfesionals(req, res) {
  const profesionals = profesionalService.getProfesionals()
  res.json({ profesionals })
}

function createProfesional(req, res) {
  const profesional = req.body
  profesionalService.createProfesional(profesional)
  res.json({ ok: true, message: 'Profesional creado' })
}

function updateProfesional(req, res) {
  const { id } = req.query
  const profesional = req.body
  const status = profesionalService.updateProfesional(id, profesional)
  const message = status ? 'Profesional actualizado' : 'El id no existe'
  res.json({ ok: status, message })
}

function deleteProfesional(req, res) {
  const { id } = req.query
  const status = profesionalService.deleteProfesional(id)
  const message = status ? 'Profesional eliminado' : 'El id no existe'
  res.json({ ok: status, message })
}

module.exports = {
  getProfesionals,
  createProfesional,
  updateProfesional,
  deleteProfesional,
}
