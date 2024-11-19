const Ingreso = require('../model/ingreso');

const getAllIngreso = async(req, res) =>{
    try{
        const ingreso = await Ingreso.getAll();
        res.json(ingreso);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const getIngresoById = async(req, res) => {
    try{
        const ingreso = await Ingreso.getById(req.params.id);
        if(!ingreso) {
            return res.status(404).json({message: 'No encontrado'});
        }
        res.json(ingreso);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const createIngreso = async(req, res) =>{
    try{
        const {ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id} = req.body;
        const nuevoIngreso = await Ingreso.create(ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id);
        res.status(201).json(nuevoIngreso);
    }
    catch(err){
        res.status(500).send(err.message);
    }

};

const updateIngreso = async(req, res) =>{
    try{
        const {ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id} = req.body;
        const ingresoActualizada = await Ingreso.update(req.params.ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id);
        res.json(ingresoActualizada);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const deleteIngreso = async(req, res) =>{
    try{
        await Ingreso.delete(req.params.id);
        res.json({message: 'eliminada satisfactoriamente'});
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {getAllIngreso, getIngresoById, createIngreso, deleteIngreso, updateIngreso};
