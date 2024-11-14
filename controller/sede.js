const Sedes = require('../model/sede');

const getAllSedes = async(req, res) =>{
    try{
        const sedes = await Sedes.getAll();
        res.json(sedes);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const getSedesById = async(req, res) => {
    try{
        const sedes = await Sedes.getById(req.params.id);
        if(!sedes) {
            return res.status(404).json({message: 'No encontrado'});
        }
        res.json(sedes);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const createSedes = async(req, res) =>{
    try{
        const {Sede_id, Sede_nombre, Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos} = req.body;
        const nuevoSede = await Sedes.create(Sede_id, Sede_nombre, Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos);
        res.status(201).json(nuevoSede);
    }
    catch(err){
        res.status(500).send(err.message);
    }

};

const updateSedes = async(req, res) =>{
    try{
        const {Sede_id, Sede_nombre, Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos} = req.body;
        const sedeActualizada = await Sedes.update(req.params.Sede_id, Sede_nombre, Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos);
        res.json(sedeActualizada);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const deleteSedes = async(req, res) =>{
    try{
        await Sedes.delete(req.params.id);
        res.json({message: 'Sede eliminada satisfactoriamente'});
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {getAllSedes, getSedesById, createSedes, deleteSedes, updateSedes};
