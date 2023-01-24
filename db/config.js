const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        //configuracion inicial que me da mongo atlas recomienda
        await mongoose.connect(process.env.BD_CNN );
        console.log("Database connected");
    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de iniciar la BD ver logs");
    }
};

module.exports = {
    dbConnection
};