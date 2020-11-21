const { createUrlWithoutQuery } = require('../../utils/urlhelpers');
const { isValid } = require('./isValid');

// TODO: add url
function build({ user, url = '' }) {
  const res = createUrlWithoutQuery(url, user);

  if (!res || !isValid(res)) {
    return null;
  }

  return res;
}

module.exports = {
  build
};
