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
<<<<<<< HEAD
=======
      })
    })

  // Load Users page and pass in a user by id
  app.get("/userss/:id", function(req, res) {
    db.Users.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      console.log(req.params.id, dbUser);
      res.render("users", {
        user: dbUser
>>>>>>> 9d99ed399f84c72015dfb64540947fcee9ceb978
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
}
