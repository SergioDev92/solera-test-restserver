// Description: Incidente controller, fot a better organization of the code
//mejor typado y mas organizado
const { response } = require('express');
const Incident = require('../models/Incident.model');


const createIncident = async(req, res = response) => {

    // const { name, email, password } = req.body;
    // console.log(name, email, password)


    try {
        //Crear incidente con el modelo
        const dbIncident = new Incident(req.body);

        //guardar usuario en la base de datos
        await dbIncident.save();

        //generar respuesta exitosa
        return res.status(200).json({
            ok: true,
            uid: dbIncident.id,
            tiipo_de_evento: dbIncident.tipo_de_evento,
        })



    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const locateIncident = async (req, res = response) => {

    // const { email, password } = req.body;
    // console.log( email, password)

    //Verificar si existe el incidente
    // let incident = await Incident.findById( id );
    let incident = await Incident.findOne({ id });

    if (incident) {
        return res.status(400).json({
            ok: false,
            msg: 'El incidente no existe con ese id'
        });

        return res.json({
            ok: true,
            msg: 'locate incident'
        });
    }
}
const updateIncident = (req, res = response) => {

    //Verificar si existe el incidente

    return res.json({
        ok: true,
        msg: 'update incident'
    });
}

const deleteIncident = (req, res = response) => {

    //Verificar si existe el incidente

    return res.json({
        ok: true,
        msg: 'delete incident'
    });
}
// const renewToken = (req, res) => {
//     return res.json({
//         ok: true,
//         msg: 'Renew'
//     });
// }



module.exports = {
    createIncident,
    locateIncident,
    updateIncident,
    deleteIncident
}
