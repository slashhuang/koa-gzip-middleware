/*
 * created by slashhuang
 * 2017.2.10
 */

//https://github.com/remy/nodemon/blob/master/doc/requireable.md
const nodemon = require('nodemon');
nodemon({
  script: `${__dirname}/test.js`,
  ext: 'js json',
  execMap: {
        'js': 'babel-node'
  },
  "ignore": [
    ".git",
    "node_modules/**/node_modules"
  ],
  "events": {
    "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
  }
})
.on('quit', function () {
  console.log('App has quit');
})
.on('restart', function (files) {
  console.log('App restarted due to: ', files);
});

