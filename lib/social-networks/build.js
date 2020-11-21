const { defaultSN } = require('./default/build');
const { crunchbase } = require('./crunchbase/build');
const { etsy } = require('./etsy/build');
const { facebook } = require('./facebook/build');
const { foursquare } = require('./foursquare/build');
const { github } = require('./github/build');
const { google } = require('./google/build');
const { instagram } = require('./instagram/build');
const { linkedin } = require('./linkedin/build');
const { medium } = require('./medium/build');
const { myspace } = require('./myspace/build');
const { pinterest } = require('./pinterest/build');
const { reddit } = require('./reddit/build');
const { soundcloud } = require('./soundcloud/build');
const { telegram } = require('./telegram/build');
const { tumblr } = require('./tumblr/build');
const { twitter } = require('./twitter/build');
const { vimeo } = require('./vimeo/build');
const { yelp } = require('./yelp/build');
const { youtube } = require('./youtube/build');

const build = {
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
  build
};
