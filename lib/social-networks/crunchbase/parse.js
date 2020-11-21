const { parseToResponse } = require('../../mappers/parse');

const CRUNCHBASE_LINKS_PATTERN = /\/organizations?\/([a-z0-9-]{1,50})(\/.*)*$/i;

function parse({ parsed }) {
  const match = CRUNCHBASE_LINKS_PATTERN.exec(parsed.pathname);
  const user = match ? match[1] : null;

  return parseToResponse('Crunchbase', user, parsed);
}

module.exports = {
  parse
};
