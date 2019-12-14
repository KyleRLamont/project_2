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
    console.log(req.body);
    db.Reservation.create({
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      departureLoc: req.body.departureLoc,
      arrivalLoc: req.body.arrivalLoc
    }).then(function(dbReservation) {
      res.json(dbReservation);
    });
  });

  // Delete an reservations by id
  app.delete("/api/reservations/:id", function(req, res) {
    db.Reservation.destroy({ where: { id: req.params.id } }).then(function(
      result
    ) {
      res.json(result);
    });
  });
};
