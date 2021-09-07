const countriesData = require("../data/countries.json");

const getAllCountries = (req, res, next) => {
  const countries = countriesData.countries.map((data) => data.name);
  res.send({ countries });
};

const getAllCountriesAndCode = (req, res, next) => {
  const countries = countriesData.countries;
  res.send({ countries });
};

module.exports = { getAllCountries, getAllCountriesAndCode };
