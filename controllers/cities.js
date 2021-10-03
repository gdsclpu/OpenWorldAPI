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
      let cities = GhanaData.states.map((data) =>
        data.districts.map((datas) => datas.cities)
      );
      //   res
      //     .status(200)
      //     .send({ districts: allDistrictInCountry(GhanaData, reverse) });
      return;

    case INDIA:
      res.status(200).send({ districts: cities });
      return;

    default:
      res.send("Nothingness");
  }
};

const getAllCitiesOfState = async (req, res, next) => {};

const getAllCitiesOfDistrict = async (req, res, next) => {};

module.exports = {
  getAllCitiesOfDistrict,
  getAllCitiesOfCountry,
  getAllCitiesOfState,
};
