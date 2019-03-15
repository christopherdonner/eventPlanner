module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
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
    location: {
      type: DataTypes.TEXT,
      len: [1]
    },
    style: {
      type: DataTypes.TEXT,
      len: [1]
    },
    startTime: {
      type: DataTypes.DATEONLY,
      len: [1]
    },
    endTime: {
      type: DataTypes.DATEONLY,
      len: [1]
    }
  });
  return Events;
};
