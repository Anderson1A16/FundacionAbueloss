const db = require('../config/mysql');

const Sedes = {
    getAll: async() =>{
        const[rows] = await db.query('select Sede_id, Sede_nombre, Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos from sede');
        return rows;
    },
    getById:async(Sede_id) =>{
        const [rows] = await db.query('select Sede_id, Sede_nombre, Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos from sede where Sede_id=?', [Sede_id]);
            return rows [0];
    },
    create:async(Sede_id,Sede_nombre,Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos) => {
        const [result] = await db.query('Insert into sede(Sede_id, Sede_nombre, Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos) values (?,?,?,?,?,?,?)',
            [Sede_id, Sede_nombre, Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos]);
        return {Sede_id:result.affectedRows.Sede_id, Sede_nombre, Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos};
    },
    update:async(Sede_id, Sede_nombre, Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos) =>{
        const [result] = await db.query('Update sede set Sede_nombre=?, Sede_direccion=?, Sede_ciudad=?, Sede_barrio=?, Sede_capacidad=?, Sede_cupos=? where Sede_id=?', [Sede_nombre, Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos, Sede_id]);
        return {Sede_id, Sede_nombre, Sede_direccion, Sede_ciudad, Sede_barrio, Sede_capacidad, Sede_cupos};
    },
    delete:async(Sede_id)=>{
        await db.query('delete from sede where Sede_id=?', [Sede_id]);
        return {Sede_id};
    }

};

module.exports = Sedes;