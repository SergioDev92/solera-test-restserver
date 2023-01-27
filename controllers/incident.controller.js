// Description: Incidente controller, fot a better organization of the code
//mejor typado y mas organizado
const { response } = require('express');
const Incident = require('../models/Incident.model');


const createIncident = async (req, res = response) => {

    // const { name, email, password } = req.body;
    // console.log(name, email, password)


    try {
        //Crear incidente con el modelo
        const dbIncident = new Incident(req.body);

        console.log(dbIncident);

        //guardar usuario en la base de datos
        await dbIncident.save();

        //generar respuesta exitosa
        return res.status(200).json({
            ok: true,
            uid: dbIncident.id,
            tipo_de_evento: dbIncident.tipo_de_evento,
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

    const { id } = req.params

    //encontrar incidente en la base de datos
    let incident = await Incident.findById(id);

    return res.status(200).json({
        incident
    });

}
const updateIncident = async (req, res = response) => {

    // console.log("prueba");
    const { id } = req.params

    //extraer el id del incidente y separarlo de los demas campos
    const { _id, ...params } = req.body;

    //actualizar incidente en la base de datos
    const incident = await Incident.findByIdAndUpdate(id, params, { new: true })

    return res.json({
        msg: "put API - actualizar incidente",
        incident
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
