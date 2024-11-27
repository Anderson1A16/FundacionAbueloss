const db = require('../config/mysql');

const Paciente = {
    getAll: async() =>{
        const[rows] = await db.query('select per_id, pa_alergias, pa_estado_civil, pa_peso, pa_estatura, pa_talla_pantalon, pa_talla_camisa, pa_protesis, pa_pañal, pa_antecedentes, pa_tipo_afiliacion, pa_estado_general, pa_rh from sql10747930.Paciente');
        return rows;
    },
    getById:async(per_id) =>{
        const [rows] = await db.query('select per_id, pa_alergias, pa_estado_civil, pa_peso, pa_estatura, pa_talla_pantalon, pa_talla_camisa, pa_protesis, pa_pañal, pa_antecedentes, pa_tipo_afiliacion, pa_estado_general, pa_rh from sql10747930.Paciente where per_id=?', [per_id]);
            return rows [0];
    },
    create:async(per_id, pa_alergias, pa_estado_civil, pa_peso, pa_estatura, pa_talla_pantalon, pa_talla_camisa, pa_protesis, pa_pañal, pa_antecedentes, pa_tipo_afiliacion, pa_estado_general, pa_rh) => {
        const [result] = await db.query('Insert into sql10747930.Paciente(per_id, pa_alergias, pa_estado_civil, pa_peso, pa_estatura, pa_talla_pantalon, pa_talla_camisa, pa_protesis, pa_pañal, pa_antecedentes, pa_tipo_afiliacion, pa_estado_general, pa_rh) values (?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [per_id, pa_alergias, pa_estado_civil, pa_peso, pa_estatura, pa_talla_pantalon, pa_talla_camisa, pa_protesis, pa_pañal, pa_antecedentes, pa_tipo_afiliacion, pa_estado_general, pa_rh]);
        return {per_id:result.affectedRows.per_id, pa_alergias, pa_estado_civil, pa_peso, pa_estatura, pa_talla_pantalon, pa_talla_camisa, pa_protesis, pa_pañal, pa_antecedentes, pa_tipo_afiliacion, pa_estado_general, pa_rh};
    },
    update:async(per_id, pa_alergias, pa_estado_civil, pa_peso, pa_estatura, pa_talla_pantalon, pa_talla_camisa, pa_protesis, pa_pañal, pa_antecedentes, pa_tipo_afiliacion, pa_estado_general, pa_rh) =>{
        const [result] = await db.query('Update sql10747930.Paciente set pa_alergias=?, pa_estado_civil=?, pa_peso=?, pa_estatura=?, pa_talla_pantalon=?, pa_talla_camisa=?, pa_protesis=?, pa_pañal=?, pa_antecedentes=?, pa_tipo_afiliacion=?, pa_estado_general=?, pa_rh=? where per_id=?', [per_documento, per_nombres, per_correo, per_fecha_nacimiento, per_genero, per_telefono, rol_id, per_id]);
        return {per_id, pa_alergias, pa_estado_civil, pa_peso, pa_estatura, pa_talla_pantalon, pa_talla_camisa, pa_protesis, pa_pañal, pa_antecedentes, pa_tipo_afiliacion, pa_estado_general, pa_rh};
    },
    delete:async(per_id)=>{
        await db.query('delete from sql10747930.Paciente where per_id=?', [per_id]);
        return {per_id};
    }

};

module.exports = Paciente;