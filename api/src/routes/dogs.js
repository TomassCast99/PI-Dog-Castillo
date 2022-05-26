const router = require("express").Router();

const { Dog, Temp } = require("../db");
const axios = require("axios");

router.get("/", async (req, res) => {
  const { name } = req.query;
  const totalRaz = await Dog.findAll({
    includes: { model: Temp, attributes: ["name"], as: "temperament" },
  });

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
  if (id) {
    const dogDB = await totalRaz.findOne({
      where: {
        id,
      },
      include: { model: Temp, as: "temperament", attributes: ["name"] },
    });
    return res.send(
      dogDB || { error: "ID no coincide con las razas guardadas" }
    );
  } else {
    return res.status(400).send("Ingrese un ID");
  }
});

module.exports = router;
