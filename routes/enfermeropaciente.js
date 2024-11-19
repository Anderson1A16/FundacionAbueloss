const express = require('express');
const Enfermero_Paciente = require('../controller/enfermeropaciente');
const router = express.Router();

router.get('/', Enfermero_Paciente.getAllEnfermeroPaciente);
router.get('/:id', Enfermero_Paciente.getEnfermeroPacienteById);
router.post('/', Enfermero_Paciente.createEnfermeroPaciente);
router.put('/:id', Enfermero_Paciente.updateEnfermeroPaciente);
router.delete('/:id', Enfermero_Paciente.deleteEnfermeroPaciente);

module.exports = router;