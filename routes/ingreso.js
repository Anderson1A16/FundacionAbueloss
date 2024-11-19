const express = require('express');
const Ingreso = require('../controller/ingreso');
const router = express.Router();

router.get('/', Ingreso.getAllIngreso);
router.get('/:id', Ingreso.getIngresoById);
router.post('/', Ingreso.createIngreso);
router.put('/:id', Ingreso.updateIngreso);
router.delete('/:id', Ingreso.deleteIngreso);

module.exports = router;