module.exports = (sequelize, DataTypes) => {
  let Grade = sequelize.define("grades", {
    student_id: {
      type: DataTypes.BIGINT.UNSIGNED
    },
    course_id: {
      type: DataTypes.BIGINT.UNSIGNED
    },
    grade: {
      type: DataTypes.INTEGER(3).UNSIGNED
    }
  },
  {
    timestamps: true,
    createdAt: 'created',
    updateAt: 'modified'
  });
  return Grade;
};