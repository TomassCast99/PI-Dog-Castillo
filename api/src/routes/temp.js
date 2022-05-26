const router = require("express").Router();
const axios = require("axios");
const { Temp } = require("../db");
const { YOUR_API_KEY } = process.env;

router.get("/", async (req, res) => {
  const tempApi = await axios(
    `https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`
  );
  const tempDB = tempApi.data
    .map((t) => t.temperament) //creo muchos arreglos con las palabras
    .toString() // las convierto a string
    .trim() // elimino los espacios en blanco y las tabulaciones
    .split(","); // las separo por las comas para tener cada una
  const filtro = tempDB.filter((t) => t); // por cada temperamento lo guardo separado
  let tempFilt = [...new Set(filtro)]; // hago un nuevo array con los temperamentos que tenia guardados y los nuevos, si se repiten se quitan

  tempFilt.forEach((t) => {
    // se fija si el temperamento esta, si esta no hace nada, si no lo crea
    Temp.findOrCreate({
      where: { name: t },
    });
  });

  const totalTemp = await Temp.findAll(); // me trae todos los temperamentos
  res.json(totalTemp);
});

module.exports = router;
