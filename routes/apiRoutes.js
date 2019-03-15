var db = require("../models");

module.exports = function(app) {
  // Get all userss
  app.get("/api/userss", function(req, res) {
    db.Users.findAll({}).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  // Create a new users
  app.post("/api/userss", function(req, res) {
    db.Users.create(req.body).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  // Delete user by id
  app.delete("/api/userss/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(dbusers) {
      res.json(dbusers);
    });
  });

  //***********/Event routes/*******************/

  // Get all Events
  app.get("/api/events", function(req, res) {
    db.Events.findAll({}).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  // Get route for retrieving a single event
  app.get("/api/events/:id", function(req, res) {
    db.Events.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvents) {
      console.log(dbEvents);
      res.json(dbEvents.id);
    });
  });

  // Create a new Event
  app.post("/api/events", function(req, res) {
    db.Events.create(req.body).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  // Delete event by id
  app.delete("/api/events/:id", function(req, res) {
    db.Events.destroy({ where: { id: req.params.id } }).then(function(
      dbEvents
    ) {
      res.json(dbEvents);
    });
  });

  // PUT route for updating events
  app.put("/api/events:id", function(req, res) {
    db.Events.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.put("/api/notify/:id", function(req, res) {
    db.Notifications.create(req.body).then(function(dbNotification) {
      res.json(dbNotification)
    });
  });
};
