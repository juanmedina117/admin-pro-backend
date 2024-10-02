require('dotenv').config();

const express = require('express');
const cors = require('cors')

const { dbConnection } = require('./database/config');

// Crear servicor de express
const port = process.env.port;
const app = express();

//Configurar CORS Middlewere
app.use(cors());

// Conexión base de datos
dbConnection();


// Rutas
app.get( '/', ( req, res )=>{


    // res.status200).json({
    //     ok:true,
    //     msg:"Hola Mundo"
    // })

    res.json({
        ok:true,
        msg:"Hola Mundo"
    });

})

app.listen(port, ()=> {
   console.log(`Servidor corriendo en el puerto ${port}`);
    
})