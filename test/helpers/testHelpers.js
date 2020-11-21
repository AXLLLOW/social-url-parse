const { getParsedUrl } = require('../../lib/utils/urlhelpers');

function testIsValid(urls, isValid, expected) {
  it.each(urls)(`should for %s return ${expected}`, (url) => {
    expect(isValid({ url })).toBe(expected);
  });
}

function testBuild(data, build) {
  it.each(data)('should for %s & user=%s return %s', (url, user, expected) => {
    expect(build({ user, url })).toBe(expected);
  });
}

function successParse(data, network, parse) {
  it.each(data)('should correct parsed user for %s', (url, expected) => {
    const parsed = getParsedUrl(url, true);
    const res = parse({ parsed });

    expect(res).toEqual({ network, ...expected });
  });
}

function errorParse(data, network, parse) {
  it.each(data)('should correct parsed user=null for %s', (url, expected) => {
    const parsed = getParsedUrl(url, true);
    const res = parse({ parsed });

    expect(res).toEqual({ network, user: null, ...expected });
  });
}

module.exports = {
  testIsValid,
  testBuild,
  successParse,
  errorParse
};
