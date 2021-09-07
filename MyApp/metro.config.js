/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {
  makeMetroConfig,
  // excludeExtraCopiesOf,
  // exclusionList,
} = require('@rnx-kit/metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');

// const additionalExclusions = [excludeExtraCopiesOf('react')];
// const blockList = exclusionList(additionalExclusions);

module.exports = makeMetroConfig({
  projectRoot: __dirname,
  resolver: {
    resolveRequest: MetroSymlinksResolver.default(),
  },
  // blockList, // For Metro >= 0.60
});
