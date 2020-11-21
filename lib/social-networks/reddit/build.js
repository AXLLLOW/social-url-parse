const { createUrlWithoutQuery } = require('../../utils/urlhelpers');
const { isValid } = require('./isValid');

function build({ user, url = 'https://www.reddit.com/user' }) {
  let tmpUrl;

  if (['r/', 'user/'].some((i) => url.startsWith(i))) {
    tmpUrl = 'https://www.reddit.com';
  } else {
    tmpUrl = 'https://www.reddit.com/user';
  }

  const res = createUrlWithoutQuery(tmpUrl, user);

  if (!res || !isValid(res)) {
    return null;
  }

  return res;
}

module.exports = {
  build
};
