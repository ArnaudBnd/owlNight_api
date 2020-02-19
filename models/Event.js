const db = require('../config/db');

 
const Event = {
  getAllEvent: function() {
    return new Promise((resolve) => {
      db.query("select * from event", function (err, result) {
        if (err) throw err;
        resolve(JSON.parse(JSON.stringify(result)));
      });
    })
  },
  getEventById: function(id) {
    return new Promise((resolve) => {
      db.query("select * from event where id=?", [id], function (err, result) {
        if (err) throw err;
        resolve(JSON.parse(JSON.stringify(result)));
      });
    })
  },
  addEvent: function(Event, callback) {
    console.log('event', Event);
    var data = [Event.titre, Event.subTitre, Event.lieu, Event.tarif, Event.image]
    return db.query(
      `Insert into event(titre, subTitre, lieu, tarif, image) values(?, ?, ?, ?, ?)`, data, callback);
  },
  deleteEvent: function(id, callback) {
    return db.query("delete from event where id=?", [id], callback);
  },
  updateEvent: function(id, Event, callback) {
    return db.query("update event set titre=?, subTitre=? where id=?", [Event.titre, Event.subTitre, id], callback);
  }
};

module.exports = Event;