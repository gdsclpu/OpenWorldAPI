const { allStates } = require("../custom/custom");
let { GHANA, INDIA } = require("../data/actions");
const GhanaData = require("../data/countries/ghana.json");
const IndiaData = require("../data/countries/india.json");

const getAllStates = async (req, res, next) => {
  let { country } = req.params;
  let { reverse } = req.query;

  reverse = reverse ? (reverse === "false" ? false : true) : true;
  switch (country.toUpperCase()) {
    case GHANA:
      res.status(200).send({ states: allStates(GhanaData, reverse) });
      return;

    case INDIA:
      res.status(200).send({ states: allStates(IndiaData, reverse) });
      return;

    default:
      res.send("Nothingness");
  }
};

module.exports = { getAllStates };
