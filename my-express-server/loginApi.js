const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { CardStyleInterpolators } = require('@react-navigation/stack');

const app = express();
const port = 3000;

//Conexión a Mongo Atlas
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log('App conectada correctamente')).catch((error)=>console.log('Error de Conexion', error));

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Esquema Usuario
const userSchema = new mongoose.Schema({
    usuario: Number,
    password: String,
});

const User = mongoose.model('User', userSchema);

//Ruta de Login
app.post('/login', async (req, res) => {
    
})