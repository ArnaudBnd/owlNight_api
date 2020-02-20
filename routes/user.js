var express = require('express');
var router = express.Router();
var User = require('../models/Users');
var bcrypt = require('bcryptjs');
var config = require('../config/security.js');
var jwt = require('jsonwebtoken');

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
      res.json(rows);
    }
  });
});

/*
 * [POST] Authentication of user
 *
 */
router.get('/auth',function(req, res, next) {
  User.getUserAuth(req.body).then((user) => {
    if(user) {
      if(bcrypt.compareSync(user[0].password, bcrypt.hashSync(req.body.password))) {
        // Create token for user connect
        const token = jwt.sign({
          id: user[0].id,
          firstname: user[0].firstname
          // if (err) throw err;
        }, config.jwtSecret, { expiresIn: '24h'})
        console.log('token', token);
        res.json({ token })
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } })
      }
      // res.json(err);
    } else {
      res.json(rows);
    }
  })
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