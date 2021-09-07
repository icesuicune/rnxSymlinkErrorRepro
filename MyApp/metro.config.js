// metro.config.js
const { makeMetroConfig } = require("@rnx-kit/metro-config");
const {
  TypeScriptValidation,
} = require("@rnx-kit/metro-plugin-typescript-validation");

const { MetroSerializer } = require("@rnx-kit/metro-serializer");
module.exports = makeMetroConfig({
  projectRoot: __dirname,
  // serializer: {
  //   customSerializer: MetroSerializer([TypeScriptValidation()]),
  // },
});