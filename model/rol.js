const db = require('../config/mysql');

const Roles = {
    getAll: async() =>{
      const [rows] = await db.query('SELECT rol_id, rol_nombre, rol_descripcion FROM sql10744906.Rol');  
      return rows;
    },
    getById: async(rol_id)=>{
        const [rows] = await db.query('SELECT rol_id, rol_nombre, rol_descripcion FROM sql10744906.Rol WHERE rol_id=?', [rol_id]);
        return rows[0];
    },
    create: async(rol_id, rol_nombre, rol_descripcion) => {
        const [result] = await db.query('INSERT INTO sql10744906.Rol(rol_id, rol_nombre, rol_descripcion) values (?,?,?)', [rol_id, rol_nombre, rol_descripcion]);
        return {rol_id:result.affectedRows.rol_id, rol_nombre, rol_descripcion};
    },
    update: async(rol_id, rol_nombre, rol_descripcion) => {
        const [result] = await db.query('UPDATE sql10744906.Rol SET rol_nombre = ?, rol_descripcion= ? WHERE rol_id= ?', [rol_nombre, rol_descripcion, rol_id]);
        return {rol_id, rol_nombre, rol_descripcion};
    },
    delete: async(rol_id) => {
        await db.query('DELETE FROM sql10744906.Rol WHERE rol_id= ?', [rol_id]);
        return {rol_id};
    }
};

module.exports = Roles;