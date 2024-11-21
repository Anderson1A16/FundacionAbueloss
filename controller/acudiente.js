const Acudientes = require('../model/acudiente');

const getAllAcudiente = async(req, res) =>{
    try{
        const Acudiente = await Acudientes.getAll();
        res.json(Acudiente);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const getAcudienteById = async(req, res) => {
    try{
        const Acudiente = await Acudientes.getById(req.params.id);
        if(!Acudiente) {
            return res.status(404).json({message: 'No encontrado'});
        }
        res.json(Acudiente);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const createAcudiente = async(req, res) =>{
    try{
        const {per_id, acu_parentesco,acu_telefono} = req.body;
        const nuevoAcudiente = await Acudientes.create(per_id, acu_parentesco, acu_telefono);
        res.status(201).json(nuevoAcudiente);
    }
    catch(err){
        res.status(500).send(err.message);
    }

};

const updateAcudiente = async(req, res) =>{
    try{
        const {per_id, acu_parentesco,acu_telefono} = req.body;
        const acudienteActualizado = await Acudientes.update(per_id, acu_parentesco, acu_telefono);
        res.json(acudienteActualizado);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const deleteAcudiente = async(req, res) =>{
    try{
        await Acudientes.delete(req.params.id);
        res.json({message: 'Acudiente eliminado satisfactoriamente'});
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {getAllAcudiente, getAcudienteById, createAcudiente, deleteAcudiente, updateAcudiente};
