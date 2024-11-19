const db = require('../config/mysql');

const Persona = {
    getAll: async() =>{
        const[rows] = await db.query('select per_id, per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id from sql10744906.Persona');
        return rows;
    },
    getById:async(su_id) =>{
        const [rows] = await db.query('select per_id, per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id from sql10744906.Persona where per_id=?', [per_id]);
            return rows [0];
    },
    create:async(per_id, per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id) => {
        const [result] = await db.query('Insert into sql10744906.Persona(per_id, per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id) values (?,?,?,?,?,?,?,?)',
            [per_id, per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id]);
        return {per_id:result.affectedRows.per_id, per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id};
    },
    update:async(per_id, per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id) =>{
        const [result] = await db.query('Update sql10744906.Persona set per_documento=?, per_nombres=?, per_correo=?, per_fecha_nacimiento=?, per_genero=?, per_telefono=?, rol_id=? where per_id=?', [per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id, per_id]);
        return {per_id, per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id};
    },
    delete:async(per_id)=>{
        await db.query('delete from sql10744906.Persona where per_id=?', [per_id]);
        return {per_id};
    }

};

module.exports = Persona;