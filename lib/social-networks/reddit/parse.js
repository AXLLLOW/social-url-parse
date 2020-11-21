const { parseToResponse } = require('../../mappers/parse');

const REDDIT_LINKS_PATTERN = /^(\/user\/|\/u\/)([a-z0-9-]{1,50})(\/.*)*$/i;

function parse({ parsed }) {
  const match = REDDIT_LINKS_PATTERN.exec(parsed.pathname);
  const user = match ? match[2] : null;

  return parseToResponse('Reddit', user, parsed);
}

module.exports = {
  parse
};
