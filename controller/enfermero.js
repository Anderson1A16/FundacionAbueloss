const Enfermeros = require('../model/enfermero');

const getAllEnfermero = async(req, res) =>{
    try{
        const Enfermero = await Enfermeros.getAll();
        res.json(Enfermero);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const getEnfermeroById = async(req, res) => {
    try{
        const Enfermero = await Enfermeros.getById(req.params.id);
        if(!Enfermero) {
            return res.status(404).json({message: 'No encontrado'});
        }
        res.json(Enfermero);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const createEnfermero = async(req, res) =>{
    try{
        const {per_id, enf_codigo, enf_turnos_dia, enf_turnos_noche} = req.body;
        const nuevoEnfermero = await Enfermeros.create(per_id, enf_codigo, enf_turnos_dia, enf_turnos_noche);
        res.status(201).json(nuevoEnfermero);
    }
    catch(err){
        res.status(500).send(err.message);
    }

};

const updateEnfermero = async(req, res) =>{
    try{
        const {per_id, enf_codigo, enf_turnos_dia, enf_turnos_noche} = req.body;
        const enfermeroActualizado = await Enfermeros.update(per_id, enf_codigo, enf_turnos_dia, enf_turnos_noche);
        res.json(enfermeroActualizado);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const deleteEnfermero = async(req, res) =>{
    try{
        await Enfermeros.delete(req.params.id);
        res.json({message: 'Enfermero eliminado satisfactoriamente'});
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {getAllEnfermero, getEnfermeroById, createEnfermero, deleteEnfermero, updateEnfermero};