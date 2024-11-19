const express = require('express');
const Persona = require('../controller/persona');
const router = express.Router();

router.get('/', Persona.getAllPersona);
router.get('/:id', Persona.getPersonaById);
router.post('/', Persona.createPersona);
router.put('/:id', Persona.updatePersona);
router.delete('/:id', Persona.deletePersona);

module.exports = router;