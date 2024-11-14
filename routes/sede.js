const express = require('express');
const Sedes = require('../controller/sede');
const router = express.Router();

router.get('/', Sedes.getAllSedes);
router.get('/:id', Sedes.getSedesById);
router.post('/', Sedes.createSedes);
router.put('/:id', Sedes.updateSedes);
router.delete('/:id', Sedes.deleteSedes);

module.exports = router;