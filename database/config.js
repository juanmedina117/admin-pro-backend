const mongoose = require('mongoose');
require('dotenv');

const dbConnection = async ()=>{

    // yMgW6nGSEW8UlCJa
    // mean_user

    try {
        
        await mongoose.connect(process.env.DB_CNN);

        console.log("DB Online");
        
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la BD ver logs')
        
    }



}

module.exports = {
    dbConnection
}