const { allCitiesOfCountry, allCitiesOfState } = require("../custom/custom");
let {
  GHANA,
  INDIA,
  USA,
  ARMENIA,
  CHINA,
  NIGERIA,
  SINGAPORE,
} = require("../data/actions");

const GhanaData = require("../data/countries/ghana.json");
const IndiaData = require("../data/countries/india.json");
const UsaData = require("../data/countries/usa.json");
const ArmeniaData = require("../data/countries/armenia.json");
const ChinaData = require("../data/countries/china.json");
const NigeriaData = require("../data/countries/nigeria.json");
const SingaporeData = require("../data/countries/singapore.json");

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
      res.status(200).send({ cities: allCitiesOfCountry(IndiaData, reverse) });
      return;

    case USA:
      res.status(200).send({ cities: allCitiesOfCountry(UsaData, reverse) });
      return;

    case ARMENIA:
      res
        .status(200)
        .send({ cities: allCitiesOfCountry(ArmeniaData, reverse) });
      return;

    case CHINA:
      res.status(200).send({ cities: allCitiesOfCountry(ChinaData, reverse) });
      return;

    case NIGERIA:
      res
        .status(200)
        .send({ cities: allCitiesOfCountry(NigeriaData, reverse) });
      return;

    case SINGAPORE:
      res
        .status(200)
        .send({ cities: allCitiesOfCountry(SingaporeData, reverse) });

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

  let index;
  switch (country.toUpperCase()) {
    case GHANA:
      index = GhanaData.states.findIndex(
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
      index = IndiaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );

      if (index === -1) {
        res.status(400).send({ message: "State not found" });
      }
      res
        .status(200)
        .send({ cities: allCitiesOfState(IndiaData, index, reverse) });
      return;

    case USA:
      index = UsaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );

      if (index === -1) {
        res.status(400).send({ message: "State not found" });
      }
      res
        .status(200)
        .send({ cities: allCitiesOfState(UsaData, index, reverse) });
      return;

    default:
      res.send("Nothingness");
  }
};

const getAllCitiesOfDistrict = async (req, res, next) => {
  let { country } = req.params;
  let { reverse, district } = req.query;

  if (!country || !district) {
    res
      .status(400)
      .send({ message: "Please provide both country and district" });
  }

  reverse = reverse ? (reverse === "false" ? false : true) : true;
  switch (country.toUpperCase()) {
    case GHANA:
      return;

    case INDIA:
      res.status(200).send({ districts: cities });
      return;

    default:
      res.send("Nothingness");
  }
};

module.exports = {
  getAllCitiesOfDistrict,
  getAllCitiesOfCountry,
  getAllCitiesOfState,
};
