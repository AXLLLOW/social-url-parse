const { parseToResponse } = require('../../mappers/parse');

const TWITTER_LINKS_PATTERN = /\/@?([a-zA-Z0-9_]{1,15})/i;
const TWITTER_RESERVED_KEYWORDS = ['hashtag', 'search'];
const TWITTER_RESERVED_PATHNAMES = ['/intent/tweet'];

function parse({ parsed }) {
  const pathname = /^#!\//.test(parsed.hash)
    ? parsed.hash.substr(2)
    : parsed.pathname;
  const match = TWITTER_LINKS_PATTERN.exec(pathname);
  let user = match ? match[1] : null;

  if (TWITTER_RESERVED_KEYWORDS.includes(user)) {
    user = null;
  } else if (
    TWITTER_RESERVED_PATHNAMES.find((path) =>
      pathname.toLowerCase().startsWith(path)
    )
  ) {
    user = null;
  }

  if (user) {
    user = user.toLowerCase();
  }

  return parseToResponse('Twitter', user, parsed);
}

module.exports = {
  parse
};
