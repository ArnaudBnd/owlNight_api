var express = require('express');
var router = express.Router();
var Event = require('../models/Event');

/*
 * [GET] Get all event
 *
 */
router.get('/', function(req, res) {
  Event.getAllEvent().then((response) => {
    res.json(response);
  })
});

/*
 * [POST] Post event into bdd
 *
 */
router.post('/',function(req, res, next) {
  console.log('here');
  console.log('req.body', req.body);
  Event.addEvent(req.body, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


/*
 * [GET] Get event by id
 *
 */
router.get('/:id', function(req, res) {
  Event.getEventById(req.params.id).then((response) => {
    res.json(response);
  })
});

/*
 * [DELETE] Delete event by id
 *
 */
router.delete('/:id',function(req, res, next) {
  Event.deleteEvent(req.params.id, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

/*
 * [PUT] update event by id
 *
 */
router.post('/:id',function(req, res, next) {
  Event.updateEvent(req.params.id, req.body, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;