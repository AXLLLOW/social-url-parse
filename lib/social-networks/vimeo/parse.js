const { parseToResponse } = require('../../mappers/parse');

const VIMEO_LINKS_PATTERN = /^\/([a-zA-Z0-9_.]{1,50})(\/.*)*$/i;
const VIMEO_RESERVED_KEYWORDS = ['features', 'watch', 'search'];

function parse({ parsed }) {
  const match = VIMEO_LINKS_PATTERN.exec(parsed.pathname);
  let user = match ? match[1] : null;

  if (VIMEO_RESERVED_KEYWORDS.includes(user)) {
    user = null;
  }

  if (user && /^\d+$/.test(user)) {
    user = null;
  }

  return parseToResponse('Vimeo', user, parsed);
}

module.exports = {
  parse
};
