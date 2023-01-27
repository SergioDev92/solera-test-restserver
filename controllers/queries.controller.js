const { response } = require('express');
const Incident = require('../models/Incident.model');

const getTopDates = async (req, res = response) => {

    //encontrar y ordenar accidentes por fecha en la base de datos 
    let incidents = await Incident.find().sort({fecha_evento: -1}).limit(10);

    return res.status(200).json({
        incidents
    });
}

// const getTopAlcaldias = async (req, res = response) => {


// const getTopVehiculos = async (req, res = response) => {


module.exports = {
    getTopDates,
    // getTopAlcaldias,
    // getTopVehiculos
}
