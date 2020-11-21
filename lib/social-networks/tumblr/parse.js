const { getSubdomain } = require('../../utils/urlhelpers');
const { parseToResponse } = require('../../mappers/parse');

function parse({ parsed }) {
  let user = null;

  const { hostname } = parsed;
  const subdomain = getSubdomain(hostname);

  if (subdomain !== '' && subdomain !== 'www') {
    user = subdomain.startsWith('www.') ? subdomain.substring(4) : subdomain;
  }

  return parseToResponse('Tumblr', user, parsed);
}

module.exports = {
  parse
};
