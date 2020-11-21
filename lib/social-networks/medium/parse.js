const { parseToResponse } = require('../../mappers/parse');

function parse({ parsed }) {
  const user = null;

  return parseToResponse('Medium', user, parsed);
}

module.exports = {
  parse
};
