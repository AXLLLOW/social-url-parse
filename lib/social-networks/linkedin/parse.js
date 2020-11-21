const { parseToResponse } = require('../../mappers/parse');

const LINKEDIN_LINKS_PATTERN = /\/(in|company)\/([a-z0-9-]{1,30})(\/.*)*$/i;

function parse({ parsed }) {
  const match = LINKEDIN_LINKS_PATTERN.exec(parsed.pathname);
  const user = match ? match[2] : null;

  return parseToResponse('LinkedIn', user, parsed);
}

module.exports = {
  parse
};
