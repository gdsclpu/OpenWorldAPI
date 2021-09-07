const router = require("express").Router();
const controller = require("../controllers/countries");

router.get("/get/all", controller.getAllCountries);
router.get("/get/all/and/code", controller.getAllCountriesAndCode);

module.exports = router;
