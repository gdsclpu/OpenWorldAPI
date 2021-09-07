const router = require("express").Router();
const stateController = require("../controllers/states");

router.get("/all/country/:country", stateController.getAllStates);

module.exports = router;
