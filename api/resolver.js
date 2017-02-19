var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');
var findCharityMatching = require('./charities');
var fs = require('fs');
var path = require('path');

// The API that returns the in-email representation.
module.exports = function(req, res) {
  var text = req.query.text.trim();

  // The 'text' is the text that was passed back from the typeahead API.
  var charity = _.first(findCharityMatching(text));
  if (!charity) {
    return res.status(404).end();
  }

  var donateForm = fs.readFileSync(path.join(__dirname, 'donateform.html')).toString();

  donateForm = _.template(donateForm)({
    name: charity.name,
    url: charity.url
  });

  res.json({
    body: donateForm,
    subject: 'Donate to ' + charity.name
  });
};