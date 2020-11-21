const { parseToResponse } = require('../../mappers/parse');

function parse({ parsed }) {
  const user = null;

  return parseToResponse('Telegram', user, parsed);
}

module.exports = {
  parse
};
