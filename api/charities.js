var charities = [
    {
        name: 'Paws Humane Society',
        url: 'http://www.pawshs.org'
    },
    {
        name: 'LGBT Initiative',
        url: 'http://www.lgbt-initiative.org'
    },
    {
        name: 'ACLU',
        url: 'http://action.aclu.org/donate-aclu?ms=web_horiz_nav_hp'
    }
    // ... add more there
];

function findCharityMatching(searchString) {
  // Return a list of charities that match typed text.
  var matchedCharities = [];

  charities.forEach(function(charity) {
    if (charity.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {
      matchedCharities.push(charity);
    }

  });

  return matchedCharities;
}

module.exports = findCharityMatching;
