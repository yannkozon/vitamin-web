const fse = require('fs-extra');

try {
  console.log('Copying icons files');
  fse.copySync(`src/vitamix`, `dist/vitamix`);
  console.log('Success!');
} catch (err) {
  console.error(err);
}
