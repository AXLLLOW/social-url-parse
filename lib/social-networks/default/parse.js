const { parseToResponse } = require('../../mappers/parse');

function parse({ parsed }) {
  return parseToResponse('null', null, parsed);
}

module.exports = {
  parse
};
