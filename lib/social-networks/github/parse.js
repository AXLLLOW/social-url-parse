const { parseToResponse } = require('../../mappers/parse');

const GITHUB_LINKS_PATTERN = /^\/([a-zA-Z0-9-]{1,50})(\/.*)*$/i;
const GITHUB_RESERVED_KEYWORDS = [
  'pulls',
  'issues',
  'marketplace',
  'explore',
  'orgs',
  'organizations'
];

function parse({ parsed }) {
  const match = GITHUB_LINKS_PATTERN.exec(parsed.pathname);
  let user = match ? match[1] : null;

  if (GITHUB_RESERVED_KEYWORDS.includes(user)) {
    user = null;
  }

  return parseToResponse('GitHub', user, parsed);
}

module.exports = {
  parse
};
