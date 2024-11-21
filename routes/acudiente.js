const express = require ('express');
const Acudientes = require ('../controller/acudiente');
const router = express.Router();

router.get('/', Acudientes.getAllAcudiente);
router.get('/:id', Acudientes.getAcudienteById);
router.post('/', Acudientes.createAcudiente);
router.put('/:id', Acudientes.updateAcudiente);
router.delete('/:id', Acudientes.deleteAcudiente);


module.exports = router;  