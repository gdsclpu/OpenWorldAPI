const router = require("express").Router();
const controller = require("../controllers/district");

/**
 *  @swagger
 * /district/get/all/district/country/{country}:
 *   get:
 *     tags: [Districts API]
 *     description: Getting all the various disticts in a country
 *     parameters:
 *     - name: country
 *       description: Country for which all districts are been searched
 *       in: path
 *       required: true
 *       type: String
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
  "/get/all/district/country/:country",
  controller.getAllDistrictsOfCountry
);

/**
 *  @swagger
 * /district/get/all/districts/{country}:
 *   get:
 *     description: Gets all districts provided state
 *     tags: [Districts API]
 *     parameters:
 *     - name: country
 *       description: The country for which the state is been searched for
 *       in: path
 *       required: true
 *       type: String
 *     - name: state
 *       description: The state for which the state is being searched
 *       in: query
 *       required: true
 *       type: String
 *     - name: reverse
 *       in: query
 *       description: To format output result to be whether in reverse other or not
 *       type: Boolean
 *
 *     responses:
 *       200:
 *         description: Success
 */

router.get("/get/all/districts/:country", controller.getAllDistrictOfState);

module.exports = router;
