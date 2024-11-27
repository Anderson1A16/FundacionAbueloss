const db = require('../config/mysql');

const SedesPersona = {
    getAll: async() =>{
        const[rows] = await db.query('select Sepe_id, Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id from sql10747930.SedePersona');
        return rows;
    },
    getById:async(Sepe_id) =>{
        const [rows] = await db.query('select Sepe_id, Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id from sql10747930.SedePersona where Sepe_id=?', [Sepe_id]);
            return rows [0];
    },
    create:async(Sepe_id, Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id) => {
        const [result] = await db.query('Insert into sql10747930.SedePersona(Sepe_id, Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id) values (?,?,?,?,?,?)',
            [Sepe_id, Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id]);
        return {Sepe_id:result.affectedRows.Sepe_id, Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id};
    },
    update:async(Sepe_id, Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id) =>{
        const [result] = await db.query('Update sql10747930.SedePersona set Sepe_fecha_ingreso=?, Sepe_fecha_salida=?, Sepe_estado=?, Sede_id=?, per_id=? where Sepe_id=?', [Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id, Sepe_id]);
        return {Sepe_id, Sepe_fecha_ingreso, Sepe_fecha_salida, Sepe_estado, Sede_id, per_id};
    },
    delete:async(Sepe_id)=>{
        await db.query('delete from sql10747930.SedePersona where Sepe_id=?', [Sepe_id]);
        return {Sepe_id};
    }

};

module.exports = SedesPersona;