const { defaultSN } = require('./default/parse');
const { crunchbase } = require('./crunchbase/parse');
const { etsy } = require('./etsy/parse');
const { facebook } = require('./facebook/parse');
const { foursquare } = require('./foursquare/parse');
const { github } = require('./github/parse');
const { google } = require('./google/parse');
const { instagram } = require('./instagram/parse');
const { linkedin } = require('./linkedin/parse');
const { medium } = require('./medium/parse');
const { myspace } = require('./myspace/parse');
const { pinterest } = require('./pinterest/parse');
const { reddit } = require('./reddit/parse');
const { soundcloud } = require('./soundcloud/parse');
const { telegram } = require('./telegram/parse');
const { tumblr } = require('./tumblr/parse');
const { twitter } = require('./twitter/parse');
const { vimeo } = require('./vimeo/parse');
const { yelp } = require('./yelp/parse');
const { youtube } = require('./youtube/parse');

const parse = {
  defaultSN,
  crunchbase,
  etsy,
  facebook,
  foursquare,
  github,
  google,
  instagram,
  linkedin,
  medium,
  myspace,
  pinterest,
  reddit,
  soundcloud,
  telegram,
  tumblr,
  twitter,
  vimeo,
  yelp,
  youtube
};

module.exports = {
  parse
};
