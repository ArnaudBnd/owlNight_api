var express = require('express');
var router = express.Router();
var Association = require('../models/Association');

/*
 * [GET] Get all Association
 *
 */
router.get('/', function(req, res) {
  Association.getAllAssociation().then((response) => {
    res.json(response);
  })
});

/*
 * [POST] Post Association into bdd
 *
 */
router.post('/',function(req, res, next) {
  console.log('here');
  Association.addAssociation(req.body, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


/*
 * [GET] Get Association by id
 *
 */
router.get('/:id', function(req, res) {
  Association.getAssociationById(req.params.id).then((response) => {
    res.json(response);
  })
});

/*
 * [DELETE] Delete Association by id
 *
 */
router.delete('/:id',function(req, res, next) {
  Association.deleteAssociation(req.params.id, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

/*
 * [PUT] update Association by id
 *
 */
router.post('/:id',function(req, res, next) {
  Association.updateAssociation(req.params.id, req.body, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;