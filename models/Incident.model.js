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
    // campos opcionales
    // fecha_evento: {
    //     type: String,
    //     default:  Date.createdAt
    // },
    hora: {
        type: String,
        default: Date.now
    },
    coordenada_x: {
        type: Number,
        default: 0
    },
    coordenada_y: {
        type: Number,
        default: 0
    },
    alcaldia: {
        type: String,
        default: 'Tlalpan'
    },
    tipo_de_vehiculo1: {
        type: String,
        default: 'Automovil'
    },
    tipo_de_vehiculo2: {
        type: String,
        default: 'NA'
    },
    tipo_de_vehiculo3: {
        type: String,
        default: 'NA'
    },
    tipo_de_vehiculo4: {
        type: String,
        default: 'NA'
    },
    marca_de_vehiculo1: {
        type: String,
        default: 'SD'
    },
    marca_de_vehiculo2: {
        type: String,
        default: 'NA'
    },
    marca_de_vehiculo3: {
        type: String,
        default: 'NA'
    },
    marca_de_vehiculo4: {
        type: String,
        default: ''
    },
    unidad_medica_de_apoyo: {
        type: String,
        default: 'TRITONES'
    },
    prioridad: {
        type: String,
        default: 'MEDIA'
    },
    color_vehiculo_1: {
        type: String,
        default: 'NA'
    },
    color_vehiculo_2: {
        type: String,
        default: 'NA'
    },
    color_vehiculo_3: {
        type: String,
        default: 'NA'
    },

}, {
    timestamps: { createdAt: 'fecha_evento' }
})

module.exports = model('Incident', IncidentSchema);