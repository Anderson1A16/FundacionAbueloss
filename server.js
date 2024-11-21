const express = require('express');
const bodyParser = require('body-parser');
const Sedes = require('./routes/sede');
const Roles = require('./routes/rol');
const SedesPersona = require('./routes/sedepersona');
const Seguimiento = require('./routes/seguimiento');
const EnfermeroPaciente = require('./routes/enfermeropaciente');
const Suministro = require('./routes/suministro');
const Ingreso = require('./routes/ingreso');
const Persona = require('./routes/persona');
const Acudiente = require('./routes/acudiente');
const Enfermero = require('./routes/enfermero');
const Medicamento = require('./routes/medicamento');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/api/sede', Sedes);
app.use('/api/rol', Roles);
app.use('/api/sedepersona', SedesPersona);
app.use('/api/seguimiento', Seguimiento);
app.use('/api/enfermeropaciente', EnfermeroPaciente);
app.use('/api/suministro', Suministro);
app.use('/api/ingreso', Ingreso);
app.use('/api/persona', Persona);
app.use('/api/acudiente', Acudiente);
app.use('/api/enfermero', Enfermero);
app.use('/api/medicamento', Medicamento);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});