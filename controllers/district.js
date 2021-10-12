const {
  allDistrictInCountry,
  allDistrictOfState,
} = require("../custom/custom");
let { GHANA, INDIA } = require("../data/actions");
const GhanaData = require("../data/countries/ghana.json");
const IndiaData = require("../data/countries/india.json");

const getAllDistrictsOfCountry = async (req, res, nex) => {
  let { country } = req.params;
  let { reverse } = req.query;

  if (!country) {
    res.send(400).send({ message: "Please provide country name" });
  }

  reverse = reverse ? (reverse === "false" ? false : true) : true;
  switch (country.toUpperCase()) {
    case GHANA:
      res
        .status(200)
        .send({ districts: allDistrictInCountry(GhanaData, reverse) });
      return;

    case INDIA:
      res
        .status(200)
        .send({ districts: allDistrictInCountry(IndiaData, reverse) });
      return;

    default:
      res.send("Nothingness");
  }
};

const getAllDistrictOfState = async (req, res, next) => {
  let { country } = req.params;
  let { reverse, state } = req.query;

  if (!country || !state) {
    res.status(400).send({ message: "Please provide both country and state" });
  }

  reverse = reverse ? (reverse === "false" ? false : true) : true;

  switch (country.toUpperCase()) {
    case GHANA:
      let index = GhanaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index === -1) {
        res.status(400).send({ message: "State no found" });
        return;
      }

      res
        .status(200)
        .send({ districts: allDistrictOfState(GhanaData, index, reverse) });
      return;

    case INDIA:
      let index = IndiaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index === -1) {
        res.status(400).send({ message: "State no found" });
        return;
      }

      res
        .status(200)
        .send({ districts: allDistrictOfState(IndiaData, index, reverse) });
      return;

    default:
      res.send("Nothingness");
  }
};

module.exports = { getAllDistrictsOfCountry, getAllDistrictOfState };
