const express = require ('express');
const Medicamentos = require ('../controller/medicamento');
const router = express.Router();

router.get('/', Medicamentos.getAllMedicamento);
router.get('/:id', Medicamentos.getAllMedicamento);
router.post('/', Medicamentos.createMedicamento);
router.put('/:id', Medicamentos.updateMedicamento);
router.delete('/:id', Medicamentos.deleteMedicamento);


module.exports = router;  