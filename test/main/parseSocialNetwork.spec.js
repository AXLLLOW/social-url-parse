const { parse } = require('../../lib');

it('should correct parsed', () => {
  expect(parse('http://www.facebook.com/user')).toEqual({
    network: 'Facebook',
    url: 'http://www.facebook.com/user',
    user: 'user'
  });
});
