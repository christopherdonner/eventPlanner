var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Users.findAll({}).then(function(dbusers){ 
    res.render("index");
    })
  });

  // Load Users page and pass in a user by id
  app.get("/userss/:id", function(req, res) {
    db.Users.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      console.log(req.params.id, dbUser);
      res.render("users", {
        user: dbUser
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
