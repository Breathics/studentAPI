module.exports = (sequelize, DataTypes) => {
  let Student = sequelize.define("students", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1,100]
    },
    course: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grade: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      len: [1,100]
    }
  },
  {
    timestamps: true,
    createdAt: 'created',
    updateAt: 'modified'
  });
  return Student;
};