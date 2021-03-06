module.exports = (sequelize, DataTypes) => {
  let Instructor = sequelize.define("instructors", {
    ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      unique: true,
      timestamps: true,
      createdAt: 'created',
      updateAt: 'modified'
    },
    student_id: {
      type: DataTypes.BIGINT.UNSIGNED
    },
    course_id: {
      type: DataTypes.BIGINT.UNSIGNED
    },
    grade: {
      type: DataTypes.INTEGER(3).UNSIGNED
    },
    name: {
      type: DataTypes.STRING,
      len: [1,100]
    }
  });
  return Instructor;
};