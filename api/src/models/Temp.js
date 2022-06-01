const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "temp",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        // en la base de datos asigno un id de cada temperamento
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    },
    { timestamps: false }
  );
};
