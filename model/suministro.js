const db = require('../config/mysql');

const Suministro = {
    getAll: async() =>{
        const[rows] = await db.query('select su_id, med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad from sql10744906.Suministro');
        return rows;
    },
    getById:async(su_id) =>{
        const [rows] = await db.query('select su_id, med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad from sql10744906.Suministro where su_id=?', [su_id]);
            return rows [0];
    },
    create:async(su_id, med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad) => {
        const [result] = await db.query('Insert into sql10744906.Suministro(su_id, med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad) values (?,?,?,?,?,?,?)',
            [su_id, med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad]);
        return {su_id:result.affectedRows.su_id, med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad};
    },
    update:async(su_id, med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad) =>{
        const [result] = await db.query('Update sql10744906.Suministro set med_id=?, per_id=?, su_hora=?, su_fecha_ingreso=?, su_fecha_finalizacion=?, su_capacidad=? where su_id=?', [med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad, su_id]);
        return {su_id, med_id, per_id, su_hora, su_fecha_ingreso, su_fecha_finalizacion, su_capacidad};
    },
    delete:async(su_id)=>{
        await db.query('delete from sql10744906.Suministro where su_id=?', [su_id]);
        return {su_id};
    }

};

module.exports = Suministro;