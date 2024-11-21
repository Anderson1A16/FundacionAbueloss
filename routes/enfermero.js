const express = require ('express');
const Enfermeros = require ('../controller/enfermero');
const router = express.Router();

router.get('/', Enfermeros.getAllEnfermero);
router.get('/:id', Enfermeros.getEnfermeroById);
router.post('/', Enfermeros.createEnfermero);
router.put('/:id', Enfermeros.updateEnfermero);
router.delete('/:id', Enfermeros.deleteEnfermero);


module.exports = router;  