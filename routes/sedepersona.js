const express = require('express');
const SedesPersona = require('../controller/sedepersona');
const router = express.Router();

router.get('/', SedesPersona.getAllSedePersona);
router.get('/:id', SedesPersona.getSedePersonaById);
router.post('/', SedesPersona.createSedePersona);
router.put('/:id', SedesPersona.updateSedePersona);
router.delete('/:id', SedesPersona.deleteSedePersona);

module.exports = router;