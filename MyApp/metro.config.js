// metro.config.js
const {makeMetroConfig} = require('@rnx-kit/metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const path = require('path');
module.exports = makeMetroConfig({
  projectRoot: path.join(__dirname, 'src'),
  resolver: {
    resolveRequest: MetroSymlinksResolver(),
  },
});
