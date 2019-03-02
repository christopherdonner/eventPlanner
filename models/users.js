module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("Users", {
    ID: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING
  });
  return users;
};
