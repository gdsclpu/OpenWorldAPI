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
const allCitiesOfCountry = (countryData, order) => {
  let cities = countryData.states.map((data) =>
    data.districts.map((datas) => datas.cities)
  );
  let newData = [];
  for (let i = 0; i < cities.length; i++) {
    for (let j = 0; j < cities[i].length; j++) {
      newData = newData.concat(cities[i][j]);
    }
  }
  return order ? newData.sort() : newData.reverse();
};

const allCitiesOfState = (countryData, index, order) => {
  return order
    ? []
        .concat(
          ...countryData.states[index].districts.map((data) => [...data.cities])
        )
        .sort()
        .filter((data) => data !== "")
    : []
        .concat(
          ...countryData.states[index].districts.map((data) => [...data.cities])
        )
        .reverse()
        .filter((data) => data !== "");
};
// --------------------------------------------------------------------

module.exports = {
  allStates,
  allDistrictInCountry,
  allDistrictOfState,
  allCitiesOfCountry,
  allCitiesOfState,
};
