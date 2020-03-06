const fetch = require('node-fetch');
const BASE_URL = 'https://restcountries.eu/rest/v2';
const BASE_HEADER = {
    method: "GET",
    headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
    }
}
const ERROR_RESPONSE = {
    status: 500,
    message: "An error occured while processing your request"
};

class CountryController {

    /**
     * GET ALL COUNTRIES ENDPOINT CONTROLLER
    */
    static getAllCountries = (req, res, next) => {
        fetch(`${BASE_URL}/all`, BASE_HEADER)
        .then(response => response.json())
        .then(responseJson => {
            res.status(200).json({status:200, data:responseJson});
        })
        .catch(err => {
            console.log("Error =>", err);
            res.status(500).json(ERROR_RESPONSE);
        });
    }

    /**
     * GET UNIQUE COUNTRY BY NAME ENDPOINT CONTROLLER
    */
    static getUniqueCountryByName = (req, res, next) => {
        fetch(`${BASE_URL}/name/${req.params.name}?fullText=true`, BASE_HEADER)
        .then(response => response.json())
        .then(responseJson => {
            const jsonResponse = parseInt(responseJson.status) !== 404 ? {status:200, data: responseJson[0]} : responseJson;
            res.status(200).json(jsonResponse);
        })
        .catch(err => {
            console.log("Error =>", err);
            res.status(500).json(ERROR_RESPONSE);
        });
    }

    /**
     * SEARCH COUNTRIES BY NAME ENDPOINT CONTROLLER
    */
    static searchCountriesByName = (req, res, next) => {
        fetch(`${BASE_URL}/name/${req.params.query}`, BASE_HEADER)
        .then(response => response.json())
        .then(responseJson => {
            const jsonResponse = parseInt(responseJson.status) !== 404 ? {status:200, data: responseJson} : responseJson;
            res.status(200).json(jsonResponse);
        })
        .catch(err => {
            console.log("Error =>", err);
            res.status(500).json(ERROR_RESPONSE);
        });
    }

}

module.exports = CountryController;