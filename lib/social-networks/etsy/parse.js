const { parseToResponse } = require('../../mappers/parse');

const ETSY_LINKS_PATTERN = /\/(shop)\/([a-zA-Z0-9]{1,30})(\/.*)*$/i;

function parse({ parsed }) {
  const match = ETSY_LINKS_PATTERN.exec(parsed.pathname);
  const user = match ? match[2] : null;

  return parseToResponse('Etsy', user, parsed);
}

module.exports = {
  parse
};
