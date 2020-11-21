const { parseToResponse } = require('../../mappers/parse');

const FOURSQUARE_LINKS_PATTERN = /^(?:\/v)?\/([^/]+)(?:\/([^/]+))?/i;
const FOURSQUARE_RESERVED_KEYWORDS = ['explore'];

function parse({ parsed }) {
  const match = FOURSQUARE_LINKS_PATTERN.exec(parsed.pathname);
  let user = match ? match[2] || match[1] : null;

  if (FOURSQUARE_RESERVED_KEYWORDS.includes(user)) {
    user = null;
  }

  return parseToResponse('Foursquare', user, parsed);
}

module.exports = {
  parse
};
