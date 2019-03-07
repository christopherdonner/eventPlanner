var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load Events Page
  app.get("/events", function(req, res) {
    db.Events.findAll({}).then(function(dbEvents) {
      res.render("events", {
        events: dbEvents
      });
    });
  });

  // Load Booking Page
  app.get("/booking", function(req, res) {
    res.render("bookingPage");
  });

  // Render About Us page
  app.get("/aboutUs", function(req, res) {
    res.render("aboutUs");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
