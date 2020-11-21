const { mapIsValid } = require('./mappers');
const {
  getDomain,
  getParsedUrl,
  getDomainName
} = require('./utils/urlhelpers');

function isValidSocialNetwork(url) {
  const parsed = getParsedUrl(url, true);

  if (!parsed) {
    return false;
  }

  const { hostname } = parsed;
  const domain = getDomain(hostname);
  const domainName = getDomainName(domain);

  return mapIsValid(domainName, { url });
}

module.exports = {
  isValidSocialNetwork
};
