const db = require('../config/mysql');

const enfermeropaciente = {
    getAll: async() =>{
        const[rows] = await db.query('select enfa_id, per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion from sql10744906.Enfermero_Paciente');
        return rows;
    },
    getById:async(enfa_id) =>{
        const [rows] = await db.query('select enfa_id, per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion from sql10744906.Enfermero_Paciente where enfa_id=?', [enfa_id]);
            return rows [0];
    },
    create:async(enfa_id, per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion) => {
        const [result] = await db.query('Insert into sql10744906.Enfermero_Paciente(enfa_id, per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion) values (?,?,?,?,?,?)',
            [enfa_id, per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion]);
        return {enfa_id:result.affectedRows.enfa_id, per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion};
    },
    update:async(enfa_id, per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion) =>{
        const [result] = await db.query('Update sql10744906.Enfermero_Paciente set per_id_enfermero=?, per_id_paciente=?, enfa_fecha_inicio=?, enfa_fecha_finalizacion=?, enfa_observacion=? where enfa_id=?', [per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion, enfa_id]);
        return {enfa_id, per_id_enfermero, per_id_paciente, enfa_fecha_inicio, enfa_fecha_finalizacion, enfa_observacion};
    },
    delete:async(enfa_id)=>{
        await db.query('delete from sql10744906.Enfermero_Paciente where enfa_id=?', [enfa_id]);
        return {enfa_id};
    }

};

module.exports = enfermeropaciente;