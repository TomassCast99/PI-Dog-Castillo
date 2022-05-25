const router = require("express").Router();
const axios = require("axios");
const { Temp } = require("../db");

router.get("/temperament", async (req, res) => {
  const { temperament } = req.query;

  const tempApi = await axios(
    `https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`
  );
  const tempDB = tempApi.map((t) => t.temperament);
  console.log(tempDB);

  //tempDB.findAll()
  // Tengo que hacer esta cagada....
});
