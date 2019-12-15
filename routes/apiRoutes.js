// Import Express dependencies

// Requiring our models
var db = require("../models");

module.exports = function(app) {
  // Get all reservations
  app.get("/api/reservations", function(req, res) {
    db.Reservation.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // Create a new reservations
  app.post("/api/reservations", function(req, res) {
    db.Reservation.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  // Delete an reservations by id
  app.delete("/api/reservations/:id", function(req, res) {
    db.Reservation.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
