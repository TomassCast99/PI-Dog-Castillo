const axios = require("axios");
const { Dog } = require("../db");

const getApiInfo = async () => {
  try {
    const apiUrl = await axios(
      `https://api.thedogapi.com/v1/breeds?api_key=87eabccf-ef2f-4e84-a4e8-92394054aca2`
    );
    apiUrl.data.map(async (e) => {
      await Dog.findOrCreate({
        where: {
          name: e.name,
          id: e.id,
          weight: e.weight.imperial,
          height: e.height.imperial,
          life_span: e.life_span,
          temperament: e.temperament ? e.temperament : "No tiene temperamento",
          image: e.image.url,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getApiInfo };
