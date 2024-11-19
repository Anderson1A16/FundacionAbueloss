const SedePersona = require('../model/sedepersona');

const getAllSedePersona = async(req, res) =>{
    try{
        const sedespersona = await SedePersona.getAll();
        res.json(sedespersona);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const getSedePersonaById = async(req, res) => {
    try{
        const sedespersona = await SedePersona.getById(req.params.id);
        if(!sedespersona) {
            return res.status(404).json({message: 'No encontrado'});
        }
        res.json(sedespersona);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const createSedePersona = async(req, res) =>{
    try{
        const {Sepe_id, Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id} = req.body;
        const nuevoSedePersona = await SedePersona.create(Sepe_id, Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id);
        res.status(201).json(nuevoSedePersona);
    }
    catch(err){
        res.status(500).send(err.message);
    }

};

const updateSedePersona = async(req, res) =>{
    try{
        const {Sepe_id, Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id} = req.body;
        const sedePersonaActualizada = await SedePersona.update(req.params.Sepe_id, Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id);
        res.json(sedePersonaActualizada);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const deleteSedePersona = async(req, res) =>{
    try{
        await SedePersona.delete(req.params.id);
        res.json({message: 'Sede eliminada satisfactoriamente'});
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {getAllSedePersona, getSedePersonaById, createSedePersona, deleteSedePersona, updateSedePersona};
