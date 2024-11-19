const express = require('express');
const Seguimiento = require('../controller/seguimiento');
const router = express.Router();

router.get('/', Seguimiento.getAllSeguimiento);
router.get('/:id', Seguimiento.getSeguimientoById);
router.post('/', Seguimiento.createSeguimiento);
router.put('/:id', Seguimiento.updateSeguimiento);
router.delete('/:id', Seguimiento.deleteSeguimiento);

module.exports = router;