module.exports = (sequelize, DataTypes) => {
  let Course = sequelize.define("courses", {
    ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      unique: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      len: [1,100]
    },
    instructor_id: {
      type: DataTypes.BIGINT.UNSIGNED
    }
  });
  return Course;
};