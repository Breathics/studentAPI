module.exports = (sequelize, DataTypes) => {
  let Student = sequelize.define("students", {
    ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      unique: true,
      timestamps: true,
      createdAt: 'created',
      updateAt: 'modified'
    },
    name: {
      type: DataTypes.STRING,
      len: [1,100]
    }
  });
  return Student;
};