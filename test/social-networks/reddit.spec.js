const {
  testIsValid,
  testBuild,
  successParse,
  errorParse
} = require('../helpers/testHelpers');
const {
  reddit: { isValid, parse, build }
} = require('../../lib/social-networks/reddit');

describe.skip('reddit isValid', () => {
  const valid = [];
  const invalid = [];

  testIsValid(valid, isValid, true);
  testIsValid(invalid, isValid, false);
});

describe.skip('reddit build', () => {
  const data = [];

  testBuild(data, build);
});

describe.skip('reddit parse', () => {
  const network = 'Reddit';
  const valid = [];
  const invalid = [];

  successParse(valid, network, parse);
  errorParse(invalid, network, parse);
});
