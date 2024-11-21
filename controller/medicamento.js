const Medicamentos = require('../model/medicamento');

const getAllMedicamento = async(req, res) =>{
    try{
        const Medicamento = await Medicamentos.getAll();
        res.json(Medicamento);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const getMedicamentoById = async(req, res) => {
    try{
        const Medicamento = await Medicamentos.getById(req.params.id);
        if(!Medicamento) {
            return res.status(404).json({message: 'No encontrado'});
        }
        res.json(Medicamento);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const createMedicamento = async(req, res) =>{
    try{
        const {med_id, med_nombre, med_presentacion, med_observacion} = req.body;
        const nuevoMedicamento = await Medicamentos.create(med_id, med_nombre, med_presentacion, med_observacion);
        res.status(201).json(nuevoMedicamento);
    }
    catch(err){
        res.status(500).send(err.message);
    }

};

const updateMedicamento = async(req, res) =>{
    try{
        const {med_id, med_nombre, med_presentacion, med_observacion} = req.body;
        const medicamentoActualizado = await Medicamentos.update(med_id, med_nombre, med_presentacion, med_observacion);
        res.json(medicamentoActualizado);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const deleteMedicamento = async(req, res) =>{
    try{
        await Medicamentos.delete(req.params.id);
        res.json({message: 'Medicamento eliminado satisfactoriamente'});
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {getAllMedicamento, getMedicamentoById, createMedicamento, deleteMedicamento, updateMedicamento};