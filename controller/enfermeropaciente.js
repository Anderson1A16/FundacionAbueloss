const EnfermeroPaciente = require('../model/enfermeropaciente');

const getAllEnfermeroPaciente = async(req, res) =>{
    try{
        const enfermeropaciente = await EnfermeroPaciente.getAll();
        res.json(enfermeropaciente);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const getEnfermeroPacienteById = async(req, res) => {
    try{
        const enfermeropaciente = await EnfermeroPaciente.getById(req.params.id);
        if(!enfermeropaciente) {
            return res.status(404).json({message: 'No encontrado'});
        }
        res.json(enfermeropaciente);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const createEnfermeroPaciente = async(req, res) =>{
    try{
        const {enfa_id, per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion} = req.body;
        const nuevoEnfermeroPaciente = await EnfermeroPaciente.create(enfa_id, per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion);
        res.status(201).json(nuevoEnfermeroPaciente);
    }
    catch(err){
        res.status(500).send(err.message);
    }

};

const updateEnfermeroPaciente = async(req, res) =>{
    try{
        const {enfa_id, per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion} = req.body;
        const enfermeropacienteActualizada = await EnfermeroPaciente.update(req.params.enfa_id, per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion);
        res.json(enfermeropacienteActualizada);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const deleteEnfermeroPaciente = async(req, res) =>{
    try{
        await EnfermeroPaciente.delete(req.params.id);
        res.json({message: 'eliminada satisfactoriamente'});
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {getAllEnfermeroPaciente, getEnfermeroPacienteById, createEnfermeroPaciente, deleteEnfermeroPaciente, updateEnfermeroPaciente};