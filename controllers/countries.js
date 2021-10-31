const countriesData = require("../data/countries.json");

const getAllCountries = (req, res, next) => {
  const countries = countriesData.countries.map((data) => data.name);
  res.send({ countries });
};

const getAllCountriesAndCode = (req, res, next) => {
  const countries = countriesData.countries.map((data) => {
    return {
      name: data.name,
      code: data.code,
    };
  });
  res.send({ countries });
};

module.exports = { getAllCountries, getAllCountriesAndCode };
