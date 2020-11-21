const { createUrlWithoutQuery } = require('../../utils/urlhelpers');
const { isValid } = require('./isValid');

function build({ user, url = 'https://www.facebook.com' }) {
  const res = createUrlWithoutQuery(url, user);

  if (!res || !isValid({ url: res })) {
    return null;
  }

  return res;
}

module.exports = {
  build
};
