const express = require('express');
const router = express.Router();
const Controller = require('../controllers/countries');

/* GET request for all countries */
router.get('/', Controller.getAllCountries);
/* GET request to get unique contry by name */
router.get('/name/:name', Controller.getUniqueCountryByName);
/* GET request to search contries by name */
router.get('/search/:query', Controller.searchCountriesByName);

module.exports = router;