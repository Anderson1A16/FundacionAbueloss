const db = require('../config/mysql');

const Medicamentos = {
    getAll: async() =>{
        const[rows] = await db.query('select med_id, med_nombre, med_presentacion, med_observacion from sql10747930.Medicamento');
        return rows;
    },
    getById:async(med_id) =>{
        const [rows] = await db.query('select med_id, med_nombre, med_presentacion, med_observacion from sql10747930.Medicamento where med_id=?', [med_id]);
            return rows [0];
    },
    create:async(med_id, med_nombre, med_presentacion) => {
        const [result] = await db.query('Insert into sql10747930.Medicamento(med_id, med_nombre, med_presentacion) values (?,?,?)',
            [med_id, med_nombre, med_presentacion]);
        return {med_id:result.affectedRows.med_id, med_nombre, med_presentacion};
    },
    update:async(per_id,  enf_codigo, enf_turnos_dia, enf_turnos_noche) =>{
        const [result] = await db.query('Update sql10747930.Medicamento set med_nombre=?, med_presentacion=? where med_id=?', [ med_nombre, med_presentacion, med_id]);
        return {per_id,  enf_codigo, enf_turnos_dia, enf_turnos_noche};
    },
    delete:async(med_id)=>{
        await db.query('delete from sql10747930.Medicamento where med_id=?', [med_id]);
        return {med_id};
    }

};

module.exports = Medicamentos;