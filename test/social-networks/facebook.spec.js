const {
  testIsValid,
  testBuild,
  successParse,
  errorParse
} = require('../helpers/testHelpers');
const {
  facebook: { isValid, build, parse }
} = require('../../lib/social-networks/facebook');

describe('facebook isValid', () => {
  const valid = [
    'http://www.facebook.com/user',
    'https://www.facebook.com/user',
    'https://fb.me/user'
  ];
  const invalid = [
    'https://www.facebook.com/',
    'https://www.facebook.com',
    'https://www.asd.com',
    'https://www.facebook.zh',
    'https://www.facebook.com/user?a=javascript:'
  ];

  testIsValid(valid, isValid, true);
  testIsValid(invalid, isValid, false);
});

describe('facebook build', () => {
  const data = [
    ['http://www.facebook.com', 'user', 'http://www.facebook.com/user'],
    ['http://www.facebook.com/', 'user', 'http://www.facebook.com/user'],
    ['https://asd.com', 'user', null],
    ['http://www.facebook.com/', undefined, null],
    ['http://www.facebook.com/', null, null],
    [undefined, 'user', 'https://www.facebook.com/user'],
    [undefined, 'user', 'https://www.facebook.com/user'],
    [undefined, undefined, null]
  ];

  testBuild(data, build);
});

describe('facebook parse', () => {
  const network = 'Facebook';
  const valid = [
    [
      'https://www.facebook.com/user',
      { user: 'user', url: 'https://www.facebook.com/user' }
    ],
    [
      'https://www.facebook.com/User',
      { user: 'User', url: 'https://www.facebook.com/User' }
    ],
    [
      'https://fr.facebook.com/User',
      { user: 'User', url: 'https://fr.facebook.com/User' }
    ]
  ];
  const invalid = [
    [
      'https://www.facebook.com',
      { user: null, url: 'https://www.facebook.com/' }
    ],
    [
      'https://www.facebook.com/',
      { user: null, url: 'https://www.facebook.com/' }
    ],
    [
      'https://fr.facebook.com/',
      { user: null, url: 'https://fr.facebook.com/' }
    ]
  ];

  successParse(valid, network, parse);
  errorParse(invalid, network, parse);
});
