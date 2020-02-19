const db = require('../config/db');

 
const Association = {
  getAllAssociation: function() {
    return new Promise((resolve) => {
      db.query("select * from association", function (err, result) {
        if (err) throw err;
        resolve(JSON.parse(JSON.stringify(result)));
      });
    })
  },
  getAssociationById: function(id) {
    return new Promise((resolve) => {
      db.query("select * from association where id=?", [id], function (err, result) {
        if (err) throw err;
        resolve(JSON.parse(JSON.stringify(result)));
      });
    })
  },
  addAssociation: function(Association, callback) {
    var data = [Association.name, Association.image, Association.lien, Association.description, Association.subTitre]
    return db.query(
      `Insert into association(name, image, lien, description, subTitre) values(?, ?, ?, ?, ?)`, data, callback);
  },
  deleteAssociation: function(id, callback) {
    return db.query("delete from association where id=?", [id], callback);
  },
  updateAssociation: function(id, Association, callback) {
    return db.query("update association set name=?, description=? where id=?", [Association.name, Association.description, id], callback);
  }
};

module.exports = Association;