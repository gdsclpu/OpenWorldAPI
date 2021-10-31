const { allStates } = require("../custom/custom");
let {
  GHANA,
  INDIA,
  ARMENIA,
  SINGAPORE,
  CHINA,
  NIGERIA,
} = require("../data/actions");

// ------------COUNTRIES JSON DATA-------------------------------
const GhanaData = require("../data/countries/ghana.json");
const IndiaData = require("../data/countries/india.json");
const ArmeniaData = require("../data/countries/armenia.json");
const SingaporeData = require("../data/countries/singapore.json");
const ChinaData = require("../data/countries/china.json");
const NigeriaData = require("../data/countries/nigeria.json");
// ----------------------------------------------------------------

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

    case ARMENIA:
      res.status(200).send({ states: allStates(ArmeniaData, reverse) });
      return;

    case SINGAPORE:
      res.status(200).send({ states: allStates(SingaporeData, reverse) });
      return;

    case CHINA:
      res.status(200).send({ states: allStates(ChinaData, reverse) });
      return;

    case NIGERIA:
      res.status(200).send({ states: allStates(NigeriaData, reverse) });

    default:
      res.send("Nothingness");
  }
};

module.exports = { getAllStates };
