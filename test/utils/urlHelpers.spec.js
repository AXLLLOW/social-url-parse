const { removeTrailingSlash } = require('../../lib/utils/urlhelpers');

it('should remove end slash', () => {
  expect(removeTrailingSlash('http://www.facebook.com/')).toEqual(
    'http://www.facebook.com'
  );
  expect(removeTrailingSlash('http://www.facebook.com')).toEqual(
    'http://www.facebook.com'
  );
});
