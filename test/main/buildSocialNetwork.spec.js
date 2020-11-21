const { build } = require('../../lib');

it('should correct builds', () => {
  expect(build('facebook', 'user')).toEqual('https://www.facebook.com/user');
  expect(build('facebook', 'user', 'http://www.facebook.com/')).toEqual(
    'http://www.facebook.com/user'
  );
});
