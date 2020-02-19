const db = require('../config/db');
const bcrypt = require('bcryptjs');
 
const Users = {
  getAllUsers: function() {
    return new Promise((resolve) => {
      db.query("select * from user", function (err, result) {
        if (err) throw err;
        resolve(JSON.parse(JSON.stringify(result)));
      });
    })
  },
  getUserById: function(id) {
    return new Promise((resolve) => {
      db.query("select * from user where id=?", [id], function (err, result) {
        if (err) throw err;
        resolve(JSON.parse(JSON.stringify(result)));
      });
    })
  },
  addUser: function(Users, callback) {
    var data = [Users.firstname, Users.lastname, Users.role, Users.password, Users.image, Users.email]

    var hashedPassword = bcrypt.hashSync(Users.password, 8);
    console.log('hashedPassword', hashedPassword);

    return db.query(
      `Insert into user(firstname, lastname, role, hashedPassword, image, email) values(?, ?, ?, ?, ?, ?)`, data, callback);
  },
  deleteUser: function(id, callback) {
    return db.query("delete from user where id=?", [id], callback);
  },
  updateUser: function(id, Users, callback) {
    console.log('id', id);
    console.log('Users', Users);
    return db.query("update user set firstname=?, lastname=? where id=?",[Users.firstname, Users.lastname, id], callback);
  }
};

module.exports = Users;