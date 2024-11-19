const express = require('express');
const Suministro = require('../controller/suministro');
const router = express.Router();

router.get('/', Suministro.getAllSuministro);
router.get('/:id', Suministro.getSuministroById);
router.post('/', Suministro.createSuministro);
router.put('/:id', Suministro.updateSuministro);
router.delete('/:id', Suministro.deleteSuministro);

module.exports = router;