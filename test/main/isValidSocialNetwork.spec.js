const { isValid } = require('../../lib');

it('should correct checked', () => {
  expect(isValid('http://www.facebook.com/user')).toEqual(true);
  expect(isValid('http://www.facebook.com/user?a=javascript')).toEqual(false);
});
