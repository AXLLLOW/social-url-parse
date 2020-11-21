const { parseToResponse } = require('../../mappers/parse');

const MYSPACE_LINKS_PATTERN = /^\/([a-zA-Z0-9_.]{1,50})(\/.*)*$/i;
const MYSPACE_RESERVED_KEYWORDS = ['discover', 'article', 'articles'];

function parse(parsed) {
  const match = MYSPACE_LINKS_PATTERN.exec(parsed.pathname);
  let user = match ? match[1] : null;

  if (MYSPACE_RESERVED_KEYWORDS.includes(user)) {
    user = null;
  }

  return parseToResponse('MySpace', user, parsed);
}

module.exports = {
  parse
};
