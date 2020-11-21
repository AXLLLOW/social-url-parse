const { isValidSocialNetwork } = require('../../utils/urlhelpers');

const REGEXES_SOCIAL = [/^([\w-.])*(reddit[.]com)$/];

function isValid({ url }) {
  return isValidSocialNetwork(url, REGEXES_SOCIAL);
}

module.exports = {
  isValid
};
