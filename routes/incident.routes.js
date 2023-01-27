 
const { Router } = require('express');
const { check } = require('express-validator');
const { createIncident, locateIncident, updateIncident, deleteIncident } = require('../controllers/incident.controller');
const { existeIncidente } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

// const { crearUsuario, loginUsuario, renewToken } = require('./controllers/auth.controller');
// const { crearUsuario, loginUsuario, renewToken } = require('./controllers/auth.controller');

 const router = Router();

 //crear un nuevo usuario
 router.post( '/new', [
    check('tipo_de_evento', 'El tipo de evento es obligatorio').not().isEmpty(),
    check('colonia', 'La colonia es obligatoria').not().isEmpty(),
    check('tipo_de_vehiculo1', 'El tipo de vehiculo es obligatorio').not().isEmpty(),
    check('prioridad', 'El campo prioridad es obligatorio').not().isEmpty(),
    validarCampos
 ], createIncident);

 //renew token
  router.get( '/get/:id', [
      check("id", "No es un id de mongo").isMongoId(),
      check("id").custom(existeIncidente),
      validarCampos
  ],
  locateIncident); 

  router.put( '/update/:id', [
      check("id", "No es un id de mongo").isMongoId(),
      check("id").custom(existeIncidente),
      validarCampos
  ],updateIncident); 

  router.delete( '/delete', deleteIncident); 

    

 module.exports = router;