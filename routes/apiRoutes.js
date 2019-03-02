var db = require("../models");

module.exports = function(app) {
  // Get all userss
  app.get("/api/userss", function(req, res) {
    db.users.findAll({}).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  // Create a new users
  app.post("/api/userss", function(req, res) {
    db.users.create(req.body).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  // Delete an users by id
  app.delete("/api/userss/:id", function(req, res) {
    db.users.destroy({ where: { id: req.params.id } }).then(function(dbusers) {
      res.json(dbusers);
    });
  });
};
