const db = require('../config/mysql');

const Acudientes = {
    getAll: async() =>{
        const[rows] = await db.query('select per_id, acu_parentesco, acu_telefono from sql10747930.Acudiente');
        return rows;
    },
    getById:async(per_id) =>{
        const [rows] = await db.query('select per_id, acu_parentesco, acu_telefono from sql10747930.Acudiente where per_id=?', [per_id]);
            return rows [0];
    },
    create:async(per_id, acu_parentesco, acu_telefono) => {
        const [result] = await db.query('Insert into sql10747930.Acudiente(per_id, acu_parentesco, acu_telefono) values (?,?,?)',
            [per_id, acu_parentesco, acu_telefono]);
        return {per_id:result.affectedRows.per_id, acu_parentesco, acu_telefono};
    },
    update:async(per_id, acu_parentesco, acu_telefono) =>{
        const [result] = await db.query('Update sql10747930.Acudiente set acu_parentesco=?, acu_telefono=? where per_id=?', [acu_parentesco, acu_telefono, per_id]);
        return {per_id, acu_parentesco, acu_telefono};
    },
    delete:async(per_id)=>{
        await db.query('delete from sql10747930.Acudiente where per_id=?', [per_id]);
        return {per_id};
    }

};