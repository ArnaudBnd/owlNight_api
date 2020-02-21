const db = require('../config/db');

 
const Survey = {
  getAllSurvey: function() {
    return new Promise((resolve) => {
      db.query("select * from survey", function (err, result) {
        if (err) throw err;
        resolve(JSON.parse(JSON.stringify(result)));
      });
    })
  },
  getSurveyById: function(id) {
    return new Promise((resolve) => {
      db.query("select * from survey where id=?", [id], function (err, result) {
        if (err) throw err;
        resolve(JSON.parse(JSON.stringify(result)));
      });
    })
  },
  addSurvey: function(Survey, callback) {
    var data = [Survey.name, Survey.idUser, Survey.nbVote]
    return db.query(
      `Insert into survey(name, idUser, nbVote) values(?, ?, ?)`, data, callback);
  },
  deleteSurvey: function(id, callback) {
    return db.query("delete from survey where id=?", [id], callback);
  }
};

module.exports = Survey;