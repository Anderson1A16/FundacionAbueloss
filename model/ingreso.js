const db = require('../config/mysql');

const Ingreso = {
    getAll: async() =>{
        const[rows] = await db.query('select ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id from sql10744906.Ingreso');
        return rows;
    },
    getById:async(ing_id) =>{
        const [rows] = await db.query('select ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id from sql10747930.Ingreso where ing_id=?', [ing_id]);
            return rows [0];
    },
    create:async(ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id) => {
        const [result] = await db.query('Insert into sql10747930.Ingreso(ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id) values (?,?,?,?,?)',
            [ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id]);
        return {ing_id:result.affectedRows.ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id};
    },
    update:async(ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id) =>{
        const [result] = await db.query('Update sql10747930.Ingreso set ing_usuario=?, ing_contraseña=?, ing_ultimo_acceso=?, per_id=? where ing_id=?', [ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id, ing_id]);
        return {ing_id, ing_usuario, ing_contraseña, ing_ultimo_acceso, per_id};
    },
    delete:async(ing_id)=>{
        await db.query('delete from sql10747930.Ingreso where ing_id=?', [ing_id]);
        return {ing_id};
    }

};

module.exports = Ingreso;