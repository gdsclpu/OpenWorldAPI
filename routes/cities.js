const router = require("express").Router();
const controller = require("../controllers/cities");

router.get(
  "/get/all/cities/country/:country",
  controller.getAllCitiesOfCountry
);

router.get("/get/all/cities/state/:country", controller.getAllCitiesOfState);
router.get(
  "/get/all/cities/district/:country",
  controller.getAllCitiesOfDistrict
);

module.exports = router;
