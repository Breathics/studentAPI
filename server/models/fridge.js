module.exports = (sequelize, DataTypes) => {
  let Fridge = sequelize.define("fridge", {
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [2, 30]
    },

  });
  return Fridge
};