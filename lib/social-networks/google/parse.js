const { parseToResponse } = require('../../mappers/parse');

const GPLUS_LINKS_PATTERN1 = /\/.*(\+[^/]+)/i;
const GPLUS_LINKS_PATTERN2 = /(?:\/u\/\d+(?:\/b)?)?\/([0-9]+)/i;

function parse({ parsed }) {
  const match =
    GPLUS_LINKS_PATTERN1.exec(parsed.pathname) ||
    GPLUS_LINKS_PATTERN2.exec(parsed.pathname);

  const user = match ? decodeURIComponent(match[1]) : null;

  return parseToResponse('Google+', user, parsed);
}

module.exports = {
  parse
};
