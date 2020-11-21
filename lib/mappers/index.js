const eq = require('lodash/fp/eq');
const cond = require('lodash/fp/cond');
const stubTrue = require('lodash/fp/stubTrue');
const { sn } = require('../social-networks');
const names = require('../constants');

const map = (methodName) =>
  cond([
    [eq(names.google), (domain, data) => sn.google[methodName](data)],
    [eq(names.twitter), (domain, data) => sn.twitter[methodName](data)],
    [eq(names.facebook), (domain, data) => sn.facebook[methodName](data)],
    [eq(names.yelp), (domain, data) => sn.yelp[methodName](data)],
    [eq(names.foursquare), (domain, data) => sn.foursquare[methodName](data)],
    [eq(names.instagram), (domain, data) => sn.instagram[methodName](data)],
    [eq(names.soundcloud), (domain, data) => sn.soundcloud[methodName](data)],
    [eq(names.youtube), (domain, data) => sn.youtube[methodName](data)],
    [eq(names.linkedin), (domain, data) => sn.linkedin[methodName](data)],
    [eq(names.crunchbase), (domain, data) => sn.crunchbase[methodName](data)],
    [eq(names.medium), (domain, data) => sn.medium[methodName](data)],
    [eq(names.myspace), (domain, data) => sn.myspace[methodName](data)],
    [eq(names.pinterest), (domain, data) => sn.pinterest[methodName](data)],
    [eq(names.telegram), (domain, data) => sn.telegram[methodName](data)],
    [eq(names.tumblr), (domain, data) => sn.tumblr[methodName](data)],
    [eq(names.reddit), (domain, data) => sn.reddit[methodName](data)],
    [eq(names.vimeo), (domain, data) => sn.vimeo[methodName](data)],
    [eq(names.github), (domain, data) => sn.github[methodName](data)],
    [eq(names.etsy), (domain, data) => sn.etsy[methodName](data)],
    [stubTrue, (domain, data) => sn.defaultSN[methodName](data)]
  ]);

module.exports = {
  mapIsValid: map('isValid'),
  mapBuild: map('build'),
  mapParse: map('parse')
};
