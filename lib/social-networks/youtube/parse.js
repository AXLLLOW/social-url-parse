const { parseToResponse } = require('../../mappers/parse');

const YOUTUBE_LINKS_PATTERN = /^(\/user\/|\/c\/|\/channel\/|\/)([a-zA-Z0-9_]{5,50}(?=(\/|$)))/i;
const YOUTUBE_RESERVED_KEYWORDS = ['watch'];

function parse({ parsed }) {
  const match = YOUTUBE_LINKS_PATTERN.exec(parsed.pathname);
  let user = match ? match[2] : null;

  if (YOUTUBE_RESERVED_KEYWORDS.includes(user)) {
    user = null;
  }

  return parseToResponse('YouTube', user, parsed);
}

module.exports = {
  parse
};
