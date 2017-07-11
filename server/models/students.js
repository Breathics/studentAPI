module.exports = (sequelize, DataTypes) => {
  let Student = sequelize.define("students", {
    name: {
      type: DataTypes.STRING,
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