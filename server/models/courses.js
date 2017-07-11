module.exports = (sequelize, DataTypes) => {
  let Course = sequelize.define("courses", {
    name: {
      type: DataTypes.STRING,
      len: [1,100]
    },
    instructor_id: {
      type: DataTypes.BIGINT.UNSIGNED
    }
  },
  {
    timestamps: false
  });
  return Course;
};