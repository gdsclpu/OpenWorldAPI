const { allCitiesOfCountry, allCitiesOfState } = require("../custom/custom");
let { GHANA, INDIA } = require("../data/actions");
const GhanaData = require("../data/countries/ghana.json");
const IndiaData = require("../data/countries/india.json");

const getAllCitiesOfCountry = async (req, res, next) => {
  let { country } = req.params;
  let { reverse } = req.query;

  if (!country) {
    res.send(400).send({ message: "Please provide country name" });
  }

  reverse = reverse ? (reverse === "false" ? false : true) : true;
  switch (country.toUpperCase()) {
    case GHANA:
      res.status(200).send({ cities: allCitiesOfCountry(GhanaData, reverse) });
      return;

    case INDIA:
      res.status(200).send({ districts: cities });
      return;

    default:
      res.send("Nothingness");
  }
};

const getAllCitiesOfState = async (req, res, next) => {
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
        res.status(400).send({ message: "State not found" });
      }
      res
        .status(200)
        .send({ cities: allCitiesOfState(GhanaData, index, reverse) });
      return;

    case INDIA:
      res.status(200).send({ districts: cities });
      return;

    default:
      res.send("Nothingness");
  }
  //   res.send(cities);
};

const getAllCitiesOfDistrict = async (req, res, next) => {};

module.exports = {
  getAllCitiesOfDistrict,
  getAllCitiesOfCountry,
  getAllCitiesOfState,
};
