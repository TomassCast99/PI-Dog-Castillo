const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.INTEGER, // identificador universal de sequelize, id unico compuesto de letras, numeros y es aleatorio.
        allowNull: false,
        primaryKey: true,
      },
      weight: {
        type: DataTypes.STRING,
      },
      height: {
        type: DataTypes.STRING,
      },
      life_span: {
        type: DataTypes.STRING,
      },
      temperament: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
