const router = require("express").Router();
const controller = require("../controllers/district");

router.get(
  "/get/all/district/country/:country",
  controller.getAllDistrictsOfCountry
);

router.get("/get/all/districts/:country", controller.getAllDistrictOfState);

module.exports = router;
