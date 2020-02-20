const db = require('../config/db');

 
const Partner = {
  getAllPartner: function() {
    return new Promise((resolve) => {
      db.query("select * from partner", function (err, result) {
        if (err) throw err;
        resolve(JSON.parse(JSON.stringify(result)));
      });
    })
  },
  getPartnerById: function(id) {
    return new Promise((resolve) => {
      db.query("select * from partner where id=?", [id], function (err, result) {
        if (err) throw err;
        resolve(JSON.parse(JSON.stringify(result)));
      });
    })
  },
  addPartner: function(Partner, callback) {
    var data = [Partner.name, Partner.image]
    return db.query(
      `Insert into partner(name, image) values(?, ?)`, data, callback);
  },
  deletePartner: function(id, callback) {
    return db.query("delete from partner where id=?", [id], callback);
  },
  updatePartner: function(id, Partner, callback) {
    return db.query("update partner set name=?, where id=?", [Partner.name, id], callback);
  }
};

module.exports = Partner;