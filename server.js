const express = require('express');
const bodyParser = require('body-parser');
const Sedes = require('./routes/sede');
const Roles = require('./routes/rol');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/api/sede', Sedes);
app.use('/api/rol', Roles);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});