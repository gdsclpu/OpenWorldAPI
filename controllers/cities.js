const { allCitiesOfCountry, allCitiesOfState } = require("../custom/custom");
let {
  GHANA,
  INDIA,
  USA,
  ARMENIA,
  CHINA,
  NIGERIA,
  SINGAPORE,
  JAPAN,
  CAMBODIA,
  ARUBA,
  BANGLADESH,
  BRAZIL,
} = require("../data/actions");

const GhanaData = require("../data/countries/ghana.json");
const IndiaData = require("../data/countries/india.json");
const UsaData = require("../data/countries/usa.json");
const ArmeniaData = require("../data/countries/armenia.json");
const ChinaData = require("../data/countries/china.json");
const NigeriaData = require("../data/countries/nigeria.json");
const SingaporeData = require("../data/countries/singapore.json");
const JapanData = require("../data/countries/japan.json");
const CambodiaData = require("../data/countries/cambodia.json");
const ArubaData = require("../data/countries/aruba.json");
const BangladeshData = require("../data/countries/bangladesh.json");
const BrazilData = require("../data/countries/brazil.json");

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
      return;

    case JAPAN:
      res.status(200).send({ cities: allCitiesOfCountry(JapanData, reverse) });
      return;

    case CAMBODIA:
      res
        .status(200)
        .send({ cities: allCitiesOfCountry(CambodiaData, reverse) });
      return;

    case ARUBA:
      res.status(200).send({ cities: allCitiesOfCountry(ArubaData, reverse) });
      return;

    case BANGLADESH:
      res
        .status(200)
        .send({ cities: allCitiesOfCountry(BangladeshData, reverse) });
      return;

    case BRAZIL:
      res.status(200).send({ cities: allCitiesOfCountry(BrazilData, reverse) });
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

    case ARMENIA:
      index = ArmeniaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index === -1) {
        res.status(400).send({ message: "State not found" });
      }

      res
        .status(200)
        .send({ cities: allCitiesOfState(ArmeniaData, index, reverse) });
      return;

    case CHINA:
      index = ChinaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index === -1) {
        res.status(400).send({ message: "State not found" });
      }

      res
        .status(200)
        .send({ cities: allCitiesOfState(ChinaData, index, reverse) });
      return;

    case NIGERIA:
      index = NigeriaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index === -1) {
        res.status(400).send({ message: "State not found" });
      }

      res
        .status(200)
        .send({ cities: allCitiesOfState(NigeriaData, index, reverse) });
      return;

    case SINGAPORE:
      index = SingaporeData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index === -1) {
        res.status(400).send({ message: "State not found" });
      }

      res
        .status(200)
        .send({ cities: allCitiesOfState(SingaporeData, index, reverse) });
      return;

    case JAPAN:
      index = JapanData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );
      if (index === -1) {
        res.status(400).send({ message: "State not found" });
      }

      res
        .status(200)
        .send({ cities: allCitiesOfState(JapanData, index, reverse) });
      return;

    case CAMBODIA:
      index = CambodiaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );

      if (index === -1) {
        res.status(400).send({ message: "State not found" });
      }

      res
        .status(200)
        .send({ cities: allCitiesOfState(CambodiaData, index, reverse) });
      return;

    case ARUBA:
      index = ArubaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );

      if (index === -1) {
        res.status(400).send({ message: "State not found" });
      }

      res
        .status(200)
        .send({ cities: allCitiesOfState(ArubaData, index, reverse) });
      return;

    case BANGLADESH:
      index = BangladeshData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );

      if (index === -1) {
        res.status(400).send({ message: "State not found" });
      }

      res
        .status(200)
        .send({ cities: allCitiesOfState(BangladeshData, index, reverse) });
      return;

    case BRAZIL:
      index = BrazilData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );

      if (index === -1) {
        res.status(400).send({ message: "State not found" });
      }

      res
        .status(200)
        .send({ cities: allCitiesOfState(BrazilData, index, reverse) });
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

    case USA:
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
