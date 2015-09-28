'use strict';

var path = require('path');
var platformConfig = require('platform-config');

var platforms = platformConfig({
  targets: path.join(__dirname, 'targets')
});

var current = platforms.current();
console.log(current);
