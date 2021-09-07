const { GHANA } = require("../data/actions");
const GhanaData = require("../data/countries/ghana.json");

const getAllStates = async (req, res, next) => {
  const { country } = req.params.country;
  switch (country) {
    case GHANA:
      let states = GhanaData.state.map((data, index) => data.name);
      res.send({ states });
  }
};

module.exports = { getAllStates };
