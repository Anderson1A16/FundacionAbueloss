const Pacientes = require('../model/paciente');

const getAllPaciente = async(req, res) =>{
    try{
        const Paciente = await Pacientes.getAll();
        res.json(Paciente);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const getPacienteById = async(req, res) => {
    try{
        const Paciente = await Pacientes.getById(req.params.id);
        if(!Paciente) {
            return res.status(404).json({message: 'No encontrado'});
        }
        res.json(Medicamento);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const createPaciente = async(req, res) =>{
    try{
        const {per_id, pa_alergias, pa_estado_civil, pa_peso, pa_estatura, pa_talla_pantalon, pa_talla_camisa, pa_protesis, pa_pañal, pa_antecedentes, pa_tipo_afiliacion, pa_estado_general, pa_rh} = req.body;
        const nuevoPaciente = await Pacientes.create(per_id, pa_alergias, pa_estado_civil, pa_peso, pa_estatura, pa_talla_pantalon, pa_talla_camisa, pa_protesis, pa_pañal, pa_antecedentes, pa_tipo_afiliacion, pa_estado_general, pa_rh);
        res.status(201).json(nuevoPaciente);
    }
    catch(err){
        res.status(500).send(err.message);
    }

};

const updatePaciente = async(req, res) =>{
    try{
        const {per_id, pa_alergias, pa_estado_civil, pa_peso, pa_estatura, pa_talla_pantalon, pa_talla_camisa, pa_protesis, pa_pañal, pa_antecedentes, pa_tipo_afiliacion, pa_estado_general, pa_rh} = req.body;
        const pacienteActualizado = await Pacientes.update(per_id, pa_alergias, pa_estado_civil, pa_peso, pa_estatura, pa_talla_pantalon, pa_talla_camisa, pa_protesis, pa_pañal, pa_antecedentes, pa_tipo_afiliacion, pa_estado_general, pa_rh);
        res.json(pacienteActualizado);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

const deletePaciente = async(req, res) =>{
    try{
        await Pacientes.delete(req.params.id);
        res.json({message: 'Paciente eliminado satisfactoriamente'});
        
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

module.exports = {getAllPaciente, getPacienteById, createPaciente, deletePaciente, updatePaciente};