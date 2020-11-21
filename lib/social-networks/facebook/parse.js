const { parseToResponse } = require('../../mappers/parse');

function parse({ parsed }) {
  let path = parsed.pathname;

  if (parsed.pathname === '/' && parsed.hash) {
    path = parsed.hash.replace(/^#!/, '');
  }

  const parts = path.split('/').filter((x) => {
    return x;
  });
  let user = null;
  let part = null;

  while (parts.length > 0) {
    part = parts.pop();
    const match = /^(?:.+-)?(\d+)$/.exec(part);

    if (match) {
      user = match[1];
      break;
    }
  }

  if (!user) {
    user = part;
  }

  return parseToResponse('Facebook', user, parsed);
}

module.exports = {
  parse
};
