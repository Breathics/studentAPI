module.exports = (sequelize, DataTypes) => {
  let Ingredient = sequelize.define("ingredients", {
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [2, 30]
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expires: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
  },
  {
    timestamps: true,
    paranoid: true,
    createdAt: true,
    deleteAt: 'destroyTime'
  });
  return Ingredient
};