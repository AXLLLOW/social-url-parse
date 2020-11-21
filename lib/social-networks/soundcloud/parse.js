const { parseToResponse } = require('../../mappers/parse');

const SOUNDCLOUD_LINKS_PATTERN = /^\/([a-zA-Z0-9_]{3,255})(\/.*)*$/i;

function parse({ parsed }) {
  const match = SOUNDCLOUD_LINKS_PATTERN.exec(parsed.pathname);
  const user = match ? match[1] : null;

  return parseToResponse('SoundCloud', user, parsed);
}

module.exports = {
  parse
};
