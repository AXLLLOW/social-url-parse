const { parseToResponse } = require('../../mappers/parse');

const INSTAGRAM_LINKS_PATTERN = /^\/([a-zA-Z0-9_.]{1,30})(\/.*)*$/i;
const INSTAGRAM_RESERVED_KEYWORDS = ['p', 'explore'];

function parse({ parsed }) {
  const match = INSTAGRAM_LINKS_PATTERN.exec(parsed.pathname);
  let user = match ? match[1] : null;

  if (INSTAGRAM_RESERVED_KEYWORDS.includes(user)) {
    user = null;
  }

  return parseToResponse('Instagram', user, parsed);
}

module.exports = {
  parse
};
