const  Incident = require('../models/Incident.model');

const existeIncidente = async( id ) => {
    // console.log(id)

    //Verificar si existe el incidente
    const incident = await Incident.findById( id );
    console.log(id)
    console.log(incident)
    

    if ( !incident ) {
        throw new Error(`El incidente con el id ${ id } no existe`);
    }
}

module.exports = {
    existeIncidente
}