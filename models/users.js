module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      len: [1]
    },
    name: {
      type: DataTypes.TEXT,
      len: [1]
    },
    type: {
      type: DataTypes.TEXT,
      len: [1]
    },
    phone: {
      type: DataTypes.TEXT,
      len: [1]
    },
    email: {
      type: DataTypes.TEXT,
      len: [1]
    }
  });
  return Users;
};
