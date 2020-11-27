const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "SuperKade@061490", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
