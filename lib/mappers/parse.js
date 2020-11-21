const parseToResponse = (network, user, url) => ({
  network,
  user,
  url: url.href
});

module.exports = {
  parseToResponse
};
