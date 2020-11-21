const tld = require('tldjs');
const parse = require('url').parse;
const trimEnd = require('lodash/trimEnd');
const validator = require('validator');

const getDomainName = (domain) => {
  return domain.split('.')[0];
};

const getDomain = (hostname) => {
  return tld.getDomain(hostname);
};

const getSubdomain = (hostname) => {
  return tld.getSubdomain(hostname);
};

const setHTTPsToUrl = (url) => {
  const tmpUrl = url.trim().replace(/^\/+/, '');

  if (!/^https?:\/\//.test(tmpUrl)) {
    return `https://${tmpUrl}`;
  }

  return tmpUrl;
};

const getStringURL = (url) => {
  let strUrl = null;

  if (typeof url !== 'string') {
    try {
      strUrl = new URL(url.toString()).toString();
    } catch (ex) {
      return null;
    }
  } else {
    try {
      strUrl = new URL(url).toString();
    } catch (ex) {
      return null;
    }
  }

  return strUrl;
};

const getParsedUrl = (url, parseQueryString) => {
  const strUrl = getStringURL(url);

  if (!strUrl) {
    return null;
  }

  return parse(setHTTPsToUrl(strUrl), parseQueryString);
};

const removeTrailingSlash = (location) => {
  const isStringLocation = typeof location === 'string';
  const path = isStringLocation ? location : location.pathname;

  if (!path) {
    return location;
  }

  const result = trimEnd(path, '/') || '/';

  return isStringLocation ? result : { ...location, pathname: result };
};

const createUrlWithoutQuery = (origin, path) => {
  if (typeof path !== 'string') {
    return null;
  }

  const url = new URL(`${removeTrailingSlash(origin)}/${path}`);

  return `${url.origin}${url.pathname}`;
};

const isValidSocialNetwork = (url, regexes) => {
  const isUserId = !validator.isURL(url, {
    protocols: ['http', 'https'],
    require_protocol: true,
    allow_underscores: true
  });

  if (isUserId) {
    return !/[?,#]/g.test(url);
  }

  if (
    !validator.isURL(url, {
      host_whitelist: regexes,
      protocols: ['http', 'https'],
      allow_underscores: true
    })
  ) {
    return false;
  }

  const { pathname, hash, search } = parse(url);

  return pathname.length > 1 && !hash && !search;
};

module.exports = {
  getDomainName,
  getDomain,
  getSubdomain,
  getParsedUrl,
  removeTrailingSlash,
  createUrlWithoutQuery,
  isValidSocialNetwork
};
