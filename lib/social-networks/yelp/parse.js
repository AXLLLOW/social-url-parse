const { parseToResponse } = require('../../mappers/parse');

const YELP_LINKS_PATTERN = /^\/biz\/([^/]+)/i;

function parse({ parsed }) {
  const match = YELP_LINKS_PATTERN.exec(parsed.pathname);
  const user = match ? match[1] : null;

  return parseToResponse('Yelp', user, parsed);
}

module.exports = {
  parse
};
