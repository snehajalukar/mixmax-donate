var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');
var findCharityMatching = require('./charities');

// The Type Ahead API.
module.exports = function(req, res) {
  console.log('aoweij');
  var text = req.query.text.trim();

  var matches = findCharityMatching(text);

  if (matches.length === 0) {
    res.json([{
      title: '<i>(no matches)</i>',
      text: ''
    }]);
  } else {
    matches = matches.map((match) => {
      return {
        title: match.name,
        // Note that the 'text' gets passed to the resolver.
        text: match.name
      };
    });

    res.json(matches);
  }
};