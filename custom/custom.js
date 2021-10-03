const allStates = (countryData, order = true) => {
  return order
    ? countryData.states
        .map((data) => data.name)
        .sort()
        .filter((data) => data !== "")
    : countryData.states
        .map((data) => data.name)
        .reverse()
        .filter((data) => data !== "");
};

// -----------DISTRICTS--------------------------------------
const allDistrictInCountry = (countryData, order) => {
  return order
    ? []
        .concat(
          ...countryData.states.map((data) =>
            data.districts.map((datas) => datas.name)
          )
        )
        .sort()
        .filter((data) => data !== "")
    : []
        .concat(
          ...countryData.states.map((data) =>
            data.districts.map((datas) => datas.name)
          )
        )
        .reverse()
        .filter((data) => data !== "");
};

const allDistrictOfState = (countryData, index, order) => {
  return order
    ? countryData.states[index].districts
        .map((data) => data.name)
        .sort()
        .filter((data) => data !== "")
    : countryData.states[index].districts
        .map((data) => data.name)
        .reverse()
        .filter((data) => data !== "");
};
// --------------------------------------------------------------------

// -------------------CITIES-------------------------------------------
// --------------------------------------------------------------------

module.exports = { allStates, allDistrictInCountry, allDistrictOfState };
