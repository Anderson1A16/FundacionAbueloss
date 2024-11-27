const express = require('express');
const Paciente = require('../controller/paciente');
const router = express.Router();

router.get('/', Paciente.getAllPaciente);
router.get('/:id', Paciente.getPacienteById);
router.post('/', Paciente.createPaciente);
router.put('/:id', Paciente.updatePaciente);
router.delete('/:id', Paciente.deletePaciente);

module.exports = router;