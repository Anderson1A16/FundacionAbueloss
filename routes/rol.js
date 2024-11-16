const express = require('express');
const Roles = require('../controller/rol');
const router = express.Router();

router.get('/', Roles.getAllRol);
router.get('/:id', Roles.getRolById);
router.post('/', Roles.createRoles);
router.put('/:id', Roles.updateRoles);
router.delete('/:id', Roles.deleteRoles);

module.exports = router;