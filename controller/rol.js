const Roles = require('../model/rol');

const getAllRol = async(req, res) =>{
    try{
        const roles = await Roles.getAll();
        res.json(roles);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const getRolById = async(req, res) => {
    try{
        const roles = await Roles.getById(req.params.id);
        if(!roles) {
            return res.status(404).json({message: 'No encontrado'});
        }
        res.json(roles);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const createRoles = async(req, res) =>{
    try{
        const {rol_id, rol_nombre, rol_descripcion} = req.body;
        const nuevoRoles = await Roles.create(rol_id, rol_nombre, rol_descripcion);
        res.status(201).json(nuevoRoles);
    }
    catch(err){
        res.status(500).send(err.message);
    }

};

const updateRoles = async(req, res) =>{
    try{
        const {rol_id, rol_nombre, rol_descripcion} = req.body;
        const rolActualizada = await Roles.update(req.params.rol_id, rol_nombre, rol_descripcion);
        res.json(rolActualizada);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const deleteRoles = async(req, res) =>{
    try{
        await Roles.delete(req.params.id);
        res.json({message: 'Rol eliminado satisfactoriamente'});
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {getAllRol, getRolById, createRoles, deleteRoles, updateRoles};