var express = require('express');
var router = express.Router();
var Partner = require('../models/Partner');

/*
 * [GET] Get all partner
 *
 */
router.get('/', function(req, res) {
  Partner.getAllPartner().then((response) => {
    res.json(response);
  })
});

/*
 * [POST] Post partner into bdd
 *
 */
router.post('/',function(req, res, next) {
  Partner.addPartner(req.body, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


/*
 * [GET] Get contact by id
 *
 */
router.get('/:id', function(req, res) {
  Partner.getPartnerById(req.params.id).then((response) => {
    res.json(response);
  })
});

/*
 * [DELETE] Delete contact by id
 *
 */
router.delete('/:id',function(req, res, next) {
  Partner.deletePartner(req.params.id, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

/*
 * [PUT] update contact by id
 *
 */
router.post('/:id',function(req, res, next) {
  Partner.updatePartner(req.params.id, req.body, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;