const router = require("express").Router();

const { Dog, Temp } = require("../db");
const axios = require("axios");
const { YOUR_API_KEY } = process.env;

router.get("/", async (req, res) => {
  const { name } = req.query;
  const totalRaz = await Dog.findAll();

  if (!name) {
    res.json(totalRaz); // si el nombre no existe que te traiga todos los pichilos
  } else {
    const perro = totalRaz.filter((e) => {
      const name = e.name.toUpperCase();
      if (name.includes(name.toUpperCase())) return name;
    });
    if (!perro) {
      return res.json(perro);
    } else {
      return res.status(400).send("No se encuentra la raza pedida");
    }
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const totalRaz = await Dog.findAll();

  // Buscar en  la DB
  if (id.includes("-")) {
    const dogDB = await totalRaz.findOne({
      where: {
        id,
      },
      include: { model: Temp, as: "temperament", attributes: ["name"] },
    });
    return res.send(
      dogDB || { error: "ID no coincide con las razas guardadas" }
    );
  }
  // Buscar en la Api
  if (id) {
    let idDog = await axios(
      `https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`
    );
    idDog = await idDog.data;
    const totalApiRaz = idDog.filter((r) => r.id === Number(id))[0];
    return res.json(totalApiRaz || { error: "ID no coincide con las razas" });
  } else {
    return res.status(400).send("Raza especifica no encontrada");
  }
});

module.exports = router;
