const router = require('express').Router();
const controller = require('../controllers/countries');

/**
 *  @swagger
 * /countries/get/all:
 *   get:
 *     tags: [Countries Endpoints]
 *     description: Getting all the countries in the world
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *            application/json:
 *              example:
 *                countries: [Afghanistan,Åland Islands,Albania,Algeria,American Samoa,AndorrA,Angola,Anguilla,Antarctica,Antigua and Barbuda,Argentina]
 */
router.get('/get/all', controller.getAllCountries);

/**
 *  @swagger
 * /countries/get/all/and/code:
 *   get:
 *     tags: [Countries Endpoints]
 *     description: Getting all the countries and their code
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            example:
 *              countries: [{"name": "Afghanistan","code": "AF"},{"name": "Åland Islands","code": "AX"},{"name": "Algeria","code": "DZ"},{"name": "American Samoa","code": "AS"},{"name": "AndorrA","code": "AD"}]
 */
router.get('/get/all/and/code', controller.getAllCountriesAndCode);

module.exports = router;
