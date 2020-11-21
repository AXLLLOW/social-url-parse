const fs = require('fs');
const path = require('path');

const socialName = process.argv[2];

if (!socialName) {
  return;
}

const startPath = "./lib/social-network";
const fullPath = path.join(startPath, socialName);
const fullPathBuild = path.join(startPath, socialName, "build");
const fullPathParse = path.join(startPath, socialName, "parse");
// TODO: add crate files
/*
fs.mkdir(fullPath, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Dir created');
});

fs.writeFile(fullPathBuild, 'fullPathBuild', (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('File created');
});


fs.writeFile(fullPathParse, 'fullPathParse', (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('File created');
});
*/
