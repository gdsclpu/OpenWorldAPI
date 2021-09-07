let { GHANA } = require("../data/actions");
const GhanaData = require("../data/countries/ghana.json");

const getAllStates = async (req, res, next) => {
  let { country } = req.params;

  switch (country.toUpperCase()) {
    case GHANA:
      console.log(country);
      let states = GhanaData.state.map((data, index) => data.name).sort();
      res.status(200).send({ states });
      return;

    default:
      res.send("Nothingness");
  }
};

module.exports = { getAllStates };
