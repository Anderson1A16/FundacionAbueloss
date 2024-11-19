const Seguimiento = require('../model/seguimiento');

const getAllSeguimiento = async(req, res) =>{
    try{
        const seguimiento = await Seguimiento.getAll();
        res.json(seguimiento);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const getSeguimientoById = async(req, res) => {
    try{
        const seguimiento = await Seguimiento.getById(req.params.id);
        if(!seguimiento) {
            return res.status(404).json({message: 'No encontrado'});
        }
        res.json(seguimiento);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const createSeguimiento = async(req, res) =>{
    try{
        const {se_id, se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id} = req.body;
        const nuevoSeguimiento = await Seguimiento.create(se_id, se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id);
        res.status(201).json(nuevoSeguimiento);
    }
    catch(err){
        res.status(500).send(err.message);
    }

};

const updateSeguimiento = async(req, res) =>{
    try{
        const {se_id, se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id} = req.body;
        const seguimientoActualizada = await Seguimiento.update(req.params.se_id, se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id);
        res.json(seguimientoActualizada);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const deleteSeguimiento = async(req, res) =>{
    try{
        await Seguimiento.delete(req.params.id);
        res.json({message: 'eliminada satisfactoriamente'});
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {getAllSeguimiento, getSeguimientoById, createSeguimiento, deleteSeguimiento, updateSeguimiento};
