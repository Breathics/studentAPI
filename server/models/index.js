const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
let env = process.env.NODE_ENV || "development";
let config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
let sequelize = new Sequelize(config.database, config.username, config.password, config);
let db = {};

debugger
console.log(sequelize);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
 
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
 
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});
// debugger
// db.ingredients.sequelize.sync({force: true}).then(() => {
//   console.log("Database looks good!");
// }).catch((err) => {
//   console.log("Nope try again");
// })

db.sequelize = sequelize;
db.Sequelize = Sequelize;
 
module.exports = db;