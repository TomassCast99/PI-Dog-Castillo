const { Router } = require("express");

// Importar todos los routers;

const routerAllDogs = require("./dogs");

// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
router.use("/dogs", routerAllDogs);

module.exports = router;
