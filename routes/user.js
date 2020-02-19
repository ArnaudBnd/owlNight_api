var express = require('express');
var router = express.Router();
var User = require('../models/Users');

/*
 * [GET] Get all contacts
 *
 */
router.get('/', function(req, res) {
  console.log('token', req.headers['x-access-token']);
  User.getAllUsers().then((response) => {
    res.json(response);
  })
});

/*
 * [POST] Post contact into bdd
 *
 */
router.post('/',function(req, res, next) {
  User.addUser(req.body, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      //generation du token
      res.json(rows);
    }
  });
});

/*
 * [GET] Get contact by id
 *
 */
router.get('/:id', function(req, res) {
  User.getUserById(req.params.id).then((response) => {
    res.json(response);
  })
});

/*
 * [DELETE] Delete contact by id
 *
 */
router.delete('/:id',function(req, res, next) {
  User.deleteUser(req.params.id, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

/*
 * [PUT] Delete contact by id
 *
 */
router.post('/:id',function(req, res, next) {
  console.log('herer');
  User.updateUser(req.params.id, req.body, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;