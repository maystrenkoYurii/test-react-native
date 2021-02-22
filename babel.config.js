const MODULE_RESOLVER_CONFIG = require('./resolver.config');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['module-resolver', MODULE_RESOLVER_CONFIG]],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
