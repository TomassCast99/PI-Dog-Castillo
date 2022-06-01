const { Dog, Temp } = require("./api/src/db.js");

const infoDB = async () => {
  return await Dog.findAll({
    include: {
      model: Temp,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

module.exports = { infoDB };
