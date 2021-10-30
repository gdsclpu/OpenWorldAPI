const router = require("express").Router();
const stateController = require("../controllers/states");

/**
 *  @swagger
 * /states/all/country/{country}:
 *   get:
 *     description: Gets all states of a country
 *     tags: [States Endpoints]
 *     parameters:
 *     - name: country
 *       description: The country for which the state is been searched for
 *       in: path
 *       required: true
 *       type: String
 *     - name: reverse
 *       in: query
 *       description: To format output result to be whether in reverse other or not
 *       type: String
 *
 *     responses:
 *       200:
 *         description: Success
 */

router.get("/all/country/:country", stateController.getAllStates);

module.exports = router;
