var express = require('express');
var router = express.Router();
var Survey = require('../models/Survey');

/*
 * [GET] Get all Survey
 *
 */
router.get('/', function(req, res) {
  Survey.getAllSurvey().then((response) => {
    res.json(response);
  })
});

/*
 * [POST] Post Survey into bdd
 *
 */
router.post('/',function(req, res, next) {
  Survey.addSurvey(req.body, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


/*
 * [GET] Get Survey by id
 *
 */
router.get('/:id', function(req, res) {
  Survey.getSurveyById(req.params.id).then((response) => {
    res.json(response);
  })
});

/*
 * [DELETE] Delete Survey by id
 *
 */
router.delete('/:id',function(req, res, next) {
  Survey.deleteSurvey(req.params.id, function(err, rows) {
    if(err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;