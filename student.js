const { DataTypes } = require("sequelize");
const sequelize = require("./database");

const Student = sequelize.define("Student", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Student;