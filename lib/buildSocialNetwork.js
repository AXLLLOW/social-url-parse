const { mapBuild } = require('./mappers');

function buildSocialLink(socialNetworkName, user, url) {
  return mapBuild(socialNetworkName, { user, url });
}

module.exports = {
  buildSocialLink
};
