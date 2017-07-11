module.exports = (sequelize, DataTypes) => {
  let Instructor = sequelize.define("instructors", {
    name: {
      type: DataTypes.STRING,
      len: [1,100]
    }
  },
  {
    timestamps: false
  });
  return Instructor;
};