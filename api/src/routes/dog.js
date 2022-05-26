const router = require("express").Router();

const { Dog, Temp } = require("../db");

router.post("/", async (req, res) => {
  const { name, height, weight, life_span, temperament, image } = req.body;
  try {
    const newDog = await Dog.create({
      name: name,
      height: height,
      weight: weight,
      life_span: life_span,
      image: image,
    });

    const tempID = await Temp.findAll({
      where: { name: temperament },
      attributes: ["id"],
    });

    newDog.addTemps(tempID);

    res.send("Raza creado correctamente");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
