const Persona = require('../model/persona');

const getAllPersona = async(req, res) =>{
    try{
        const persona = await Persona.getAll();
        res.json(persona);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const getPersonaById = async(req, res) => {
    try{
        const persona = await Persona.getById(req.params.id);
        if(!persona) {
            return res.status(404).json({message: 'No encontrado'});
        }
        res.json(persona);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const createPersona = async(req, res) =>{
    try{
        const {per_id, per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id} = req.body;
        const nuevoPersona = await Persona.create(per_id, per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id);
        res.status(201).json(nuevoPersona);
    }
    catch(err){
        res.status(500).send(err.message);
    }

};

const updatePersona = async(req, res) =>{
    try{
        const {per_id, per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id} = req.body;
        const personaActualizada = await Persona.update(req.params.per_id, per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id);
        res.json(personaActualizada);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const deletePersona = async(req, res) =>{
    try{
        await Persona.delete(req.params.id);
        res.json({message: 'eliminada satisfactoriamente'});
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {getAllPersona, getPersonaById, createPersona, deletePersona, updatePersona};
