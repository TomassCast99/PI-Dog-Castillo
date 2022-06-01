const router = require("express").Router();

const { Dog, Temp, Op } = require("../db");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      const totalRaz = await Dog.findAll({
        includes: {
          model: Temp,
          attributes: ["name"],
          through: { temperament: [] },
        },
      });
      res.json(totalRaz); // si el nombre no existe que te traiga todos los pichilos
    } else {
      const nameDog = await Dog.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        includes: {
          model: Temp,
          attributes: ["name"],
          through: { temperament: [] },
        },
      });
      if (nameDog) {
        res.json(nameDog);
      } else {
        return res.status(404).send("No se encuentra la raza pedida");
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const dogDB = await Dog.findOne({
        where: {
          id: id,
        },
        includes: {
          model: Temp,
          attributes: ["name"],
          through: { temperament: [] },
        },
      });

      if (dogDB) {
        return res.json(dogDB);
      } else {
        return res.status(404).send("ID no se encuentra en la base de datos");
      }
    } else {
      return res.status(404).send("ID no valido");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
