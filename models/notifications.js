
module.exports = function (sequelize, DataTypes) {

  var Notifications = sequelize.define("Notifications", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      len: [1]
    },
    Sender: {
      type: DataTypes.INTEGER,
      len: [1]
    },
    Recipient: {
      type: DataTypes.INTEGER,
      len: [1]
    },
    Event: {
      type: DataTypes.INTEGER,
      len: [1]
    },
    type: {
      type: DataTypes.TEXT,
      len: [1]
    }
  });
  return Notifications;
};
