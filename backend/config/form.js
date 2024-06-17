// backend/models/Form.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Form = sequelize.define('Form', {
    formType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    countryCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Form;
