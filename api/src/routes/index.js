const { Router } = require("express");

// Importar todos los routers;

const routerAllDogs = require("./dogs");

const routertempDogs = require("./temp");
const routerPostDogs = require("./dog");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers

router.use("/dogs", routerAllDogs);

router.use("/temperament", routertempDogs);
router.use("/dog", routerPostDogs);

module.exports = router;
