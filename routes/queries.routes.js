 
const { Router } = require('express');
const { getTopDates } = require('../controllers/queries.controller');

 const router = Router();
// Part 2, queries to the database

// últimos 10 registros descendientes por fecha
  router.get( '/top10Dates', getTopDates); 

  //Top 10 de alcaldías con más choques
  // router.get( '/top10Alcaldias', getTopDates); 

  // Top 10 de las marcas de vehículos que más chocan 
  // router.get( '/top10Vehiculos', getTopDates); 

    
 module.exports = router;