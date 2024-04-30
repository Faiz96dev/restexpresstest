

const express = require('express');
const { Sequelize } = require('sequelize');
require('dotenv').config(); 

const config = require('./config.js')['development'];


const app = express();
const port = 3000; 


export  const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: 'localhost',
    dialect: 'mysql',
    define: config.define || {} 
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.stack);
    }
}

testConnection();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
