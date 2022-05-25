const { Router } = require("express");

// Importar todos los routers;

const routerAllDogs = require("./dogs");
const routeridDogs = require("./dogs");
const routertempDogs = require("./temp");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers

router.use("/dogs", routerAllDogs);
router.use("/dogs", routeridDogs);
router.use("/temperament", routertempDogs);

module.exports = router;
