const router = require("express").Router();

const { Dog, Temp } = require("../db");
const axios = require("axios");

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

module.exports = router;
