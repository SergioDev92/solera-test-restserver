const { Schema, model } = require('mongoose');

const IncidentSchema = Schema({

    tipo_de_evento: {
        type: String,
        required: true
    },
    colonia: {
        type: String,
        required: true
    },
    tipo_de_vehiculo1: {
        type: String,
        required: true
    },
    prioridad: {
        type: String,
        required: true
    },
})

module.exports = model('Incident', IncidentSchema);