const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js')['development'];
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'mysql',
  define: config.define || {} 
});

const User = sequelize.define(
  'User',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    refreshToken: {
      type: DataTypes.STRING
    }
  },
  {
  }
);



module.exports = User;
