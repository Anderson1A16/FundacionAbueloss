const Suministro = require('../model/suministro');

const getAllSuministro = async(req, res) =>{
    try{
        const suministro = await Suministro.getAll();
        res.json(suministro);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const getSuministroById = async(req, res) => {
    try{
        const suministro = await Suministro.getById(req.params.id);
        if(!suministro) {
            return res.status(404).json({message: 'No encontrado'});
        }
        res.json(suministro);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const createSuministro = async(req, res) =>{
    try{
        const {su_id, med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad} = req.body;
        const nuevoSuministro = await Suministro.create(su_id, med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad);
        res.status(201).json(nuevoSuministro);
    }
    catch(err){
        res.status(500).send(err.message);
    }

};

const updateSuministro = async(req, res) =>{
    try{
        const {su_id, med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad} = req.body;
        const suministroActualizada = await Suministro.update(req.params.su_id, med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad);
        res.json(suministroActualizada);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const deleteSuministro = async(req, res) =>{
    try{
        await Suministro.delete(req.params.id);
        res.json({message: 'eliminada satisfactoriamente'});
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {getAllSuministro, getSuministroById, createSuministro, deleteSuministro, updateSuministro};
