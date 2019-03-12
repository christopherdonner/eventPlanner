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
  // Load Event by id 
  app.get("/events/:id", function(req, res) {
    db.Events.findOne({ where: { id: req.params.id } }).then(function() {
      db.Events.findAll({}).then(function(dbEvents) {
        console.log(dbEvents);
        res.render("events", {
          events: dbEvents
        });
      });
    });
  });

  // Load User by id
  app.get("/userss/:id", function(req, res) {
    db.Users.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      db.Events.findAll({}).then(function(dbEvent) {
        console.log(dbEvent);
        res.render("users", {
          user: dbUser
        });
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

  // Render 404 page for any unmatched routess
  app.get("*", function(req, res) {
    res.render("404");
  });
};
