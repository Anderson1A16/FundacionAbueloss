const db = require('../config/mysql');

const Enfermeros = {
    getAll: async() =>{
        const[rows] = await db.query('select per_id,  enf_codigo, enf_turnos_dia, enf_turnos_noche from sql10744906.Enfermero');
        return rows;
    },
    getById:async(per_id) =>{
        const [rows] = await db.query('select per_id,  enf_codigo, enf_turnos_dia, enf_turnos_noche from sql10744906.Enfermero where per_id=?', [per_id]);
            return rows [0];
    },
    create:async(per_id, enf_codigo, enf_turnos_dia, enf_turnos_noche) => {
        const [result] = await db.query('Insert into sql10744906.Enfermero(per_id,  enf_codigo, enf_turnos_dia, enf_turnos_noche) values (?,?,?,?)',
            [per_id,  enf_codigo, enf_turnos_dia, enf_turnos_noche]);
        return {per_id:result.affectedRows.per_id,  enf_codigo, enf_turnos_dia, enf_turnos_noche};
    },
    update:async(per_id, enf_codigo, enf_turnos_dia, enf_turnos_noche) =>{
        const [result] = await db.query('Update sql10744906.Enfermero set enf_codigo=?, enf_turnos_dia=?, enf_turnos_noche=? where per_id=?', [  enf_codigo, enf_turnos_dia, enf_turnos_noche, per_id]);
        return {per_id, enf_codigo, enf_turnos_dia, enf_turnos_noche};
    },
    delete:async(per_id)=>{
        await db.query('delete from sql10744906.Enfermero where per_id=?', [per_id]);
        return {per_id};
    }

};

module.exports = Enfermeros;