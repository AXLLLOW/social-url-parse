const { createUrlWithoutQuery } = require('../../utils/urlhelpers');
const { isValid } = require('./isValid');

function build({ user, url = 'https://medium.com' }) {
  const res = createUrlWithoutQuery(url, user);

  if (!res || !isValid(res)) {
    return null;
  }

  return res;
}

module.exports = {
  build
};
