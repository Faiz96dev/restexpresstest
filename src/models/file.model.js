const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js')['development'];
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'mysql',
  define: config.define || {} 
});

const File = sequelize.define(
  'File',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uploadDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
  }
);



module.exports = File;
