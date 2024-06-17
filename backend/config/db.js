const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRESS_URL, {
    ssl: {
        require: true,
        rejectUnauthorized: false // Note: setting `rejectUnauthorized` to false can make the connection vulnerable to man-in-the-middle attacks.
    }
});
module.exports = sequelize;