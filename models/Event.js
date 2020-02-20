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
    var data = [Event.name, Event.subTitre, Event.emplacement, Event.price, Event.description, Event.image]
    return db.query(
      `Insert into event(name, subTitre, emplacement, price, description, image) values(?, ?, ?, ?, ?, ?)`, data, callback);
  },
  deleteEvent: function(id, callback) {
    return db.query("delete from event where id=?", [id], callback);
  },
  updateEvent: function(id, Event, callback) {
    return db.query("update event set name=?, subTitre=? where id=?", [Event.titre, Event.subTitre, id], callback);
  }
};

module.exports = Event;