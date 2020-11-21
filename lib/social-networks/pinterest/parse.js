const { parseToResponse } = require('../../mappers/parse');

const PINTEREST_LINKS_PATTERN = /^\/([a-zA-Z0-9_.]{1,50})(\/.*)*$/i;
const PINTEREST_RESERVED_KEYWORDS = ['pin', 'following'];

function parse({ parsed }) {
  const match = PINTEREST_LINKS_PATTERN.exec(parsed.pathname);
  let user = match ? match[1] : null;

  if (PINTEREST_RESERVED_KEYWORDS.includes(user)) {
    user = null;
  }

  return parseToResponse('Pinterest', user, parsed);
}

module.exports = {
  parse
};
