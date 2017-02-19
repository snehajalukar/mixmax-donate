var charities = [
    {
        name: 'Best Friends Animal Society',
        url: 'http://bestfriends.org/'
    },
    {
        name: 'Cybersmile',
        url: 'https://www.cybersmile.org/donate'
    },
    {
        name: 'Paws Humane Society',
        url: 'http://www.pawshs.org'
    },
    {
        name: 'Save a Pet',
        url: 'http://saveapetil.org/'
    },
    {
        name: 'American Society for the Prevention of Cruelty to Animals',
        url: 'https://secure.aspca.org/donate/ps-gn-p2?ms=MP_PMK_Googleawos-T4&initialms=MP_PMK_Googleawos-T4&pcode=WPSE9XXGOGN2PK00034&lpcode=WPSE9XXGOGN1PK00034&gclid=CjwKEAiA_p_FBRCRi_mW5Myl4S0SJAAkezZrFqEPuF9Ss4ExzJR7i04uKiE3MfR_TfKHnPiU5iztOxoCNcjw_wcB'
    },
    {
        name: 'Human Rights Campaign',
        url: 'https://give.hrc.org/ea-action/action?ea.client.id=1954&ea.campaign.id=62244&ea.tracking.id=DR_DON_GS_201701AQ&utm_source=GS&utm_medium=AD&utm_campaign=201701AQ&utm_content=178633966492&utm_term=lgbt%20organizations%20to%20donate%20to'
    },
    {
        name: 'The Trevor Project',
        url: 'http://www.thetrevorproject.org/'
    },
    {
        name: 'LGBT Initiative',
        url: 'https://www.lgbt-initiative.org/'
    },
    {
        name: 'International Rescue Committee',
        url: 'https://www.rescue.org/how-to-help'
    },
    {
        name: 'The UN Refugee Committee',
        url: 'https://donate.unhcr.org/int-en/general/?set_country=INT'
    },
    {
        name: 'Charity Water',
        url: 'https://donate.charitywater.org/donate/home-variant'
    },
    {
        name: 'Doctors Without Borders',
        url: 'https://donate.doctorswithoutborders.org/onetime.cfm'
    },
    {
        name: 'The Detroit Water Project',
        url: 'https://www.detroitwaterproject.org/#donate'
    },
    {
        name: 'The Nature Conservancy',
        url: 'https://support.nature.org/site/Donation2?df_id=12640&12640.donation=form1&sbid=N01&set.SingleDesignee=13311&src=sea.awp.prnone.crv1&gclid=CjwKEAiA_p_FBRCRi_mW5Myl4S0SJAAkezZrR1SIshDoRWT8prm3zaie1qgtJ3pLRgAlXpk9M9d5AhoC3VTw_wcB'
    }
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
