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
      let index = IndiaData.states.findIndex(
        (data) => data.name.toLowerCase() === state.toLowerCase()
      );

      if (index === -1) {
        res.status(400).send({ message: "State not found" });
      }
      res
        .status(200)
        .send({ cities: allCitiesOfState(IndiaData, index, reverse) });
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
  //   let index;
  //   for (let i = 0; i < GhanaData.states.length; i++) {
  //     for (let j = 0; j < GhanaData.states[i].length; j++) {
  //       for (let k = 0; k < GhanaData.states[i][j].length; k++) {
  //         if (GhanaData.states[i] === district) {
  //           console.log(GhanaData.states[i][j]);
  //         }
  //       }
  //     }
  //   }
  //   console.log(
  //     GhanaData.states.map((states) =>
  //       states.districts.filter(
  //         (districts) => districts.name.toLowerCase() == district.toLowerCase()
  //       )
  //     )
  //   );
  switch (country.toUpperCase()) {
    case GHANA:
      //   let index = GhanaData.states.findIndex(
      //     (data) => data.name.toLowerCase() === state.toLowerCase()
      //   );

      //   if (index === -1) {
      //     res.status(400).send({ message: "State not found" });
      //   }
      //   res
      //     .status(200)
      //     .send({ cities: allCitiesOfState(GhanaData, index, reverse) });
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
