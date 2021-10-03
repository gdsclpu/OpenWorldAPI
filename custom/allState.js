const allStates = (countryData, order = true) => {
  return order
    ? countryData.states.map((data) => data.name).sort()
    : countryData.states.map((data) => data.name).reverse();
};

module.exports = { allStates };
