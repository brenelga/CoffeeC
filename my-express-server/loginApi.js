const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { CardStyleInterpolators } = require('@react-navigation/stack');

const app = express();
const port = 3000;

//Conexión a Mongo Atlas
const dbURI = 'mongodb+srv://jesusgalicia23e:rpp978ZC0EBvfaZj@cluster0.l4qpwpc.mongodb.net/';
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