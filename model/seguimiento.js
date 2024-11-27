const db = require('../config/mysql');

const Seguimiento = {
    getAll: async() =>{
        const[rows] = await db.query('select se_id, se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id from sql10747930.Seguimiento');
        return rows;
    },
    getById:async(se_id) =>{
        const [rows] = await db.query('select se_id, se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id from sql10747930.Seguimiento where se_id=?', [se_id]);
            return rows [0];
    },
    create:async(se_id, se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id) => {
        const [result] = await db.query('Insert into sql10747930.Seguimiento(se_id, se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id) values (?,?,?,?,?,?,?,?,?)',
            [se_id, se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id]);
        return {se_id:result.affectedRows.se_id, se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id};
    },
    update:async(se_id, se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id) =>{
        const [result] = await db.query('Update sql10747930.Seguimiento set se_presion_arterial=?, se_ritmo_cardiaco=?, se_fecha=?, se_temperatura=?, se_peso=?, se_frecuencia_respiratoria=?, se_observacion=?, per_id=? where se_id=?', [se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id, se_id]);
        return {se_id, se_presion_arterial, se_ritmo_cardiaco, se_fecha, se_temperatura, se_peso, se_frecuencia_respiratoria, se_observacion, per_id};
    },
    delete:async(se_id)=>{
        await db.query('delete from sql10747930.Seguimiento where se_id=?', [se_id]);
        return {se_id};
    }

};

module.exports = Seguimiento;