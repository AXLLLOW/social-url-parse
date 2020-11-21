const { mapParse } = require('./mappers');
const {
  getDomain,
  getParsedUrl,
  getDomainName
} = require('./utils/urlhelpers');

const DEFAULT = { network: null, user: null, url: null };

function parseSocialNetwork(url) {
  const parsed = getParsedUrl(url, true);

  if (!parsed) {
    return DEFAULT;
  }

  const { hostname } = parsed;
  const domain = getDomain(hostname);
  const domainName = getDomainName(domain);

  return mapParse(domainName, { parsed });
}

module.exports = {
  parseSocialNetwork
};
