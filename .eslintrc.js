const MODULE_RESOLVER_CONFIG = require('./resolver.config');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-native', 'prettier', 'import', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'plugin:jest/recommended',
    'prettier',
  ],
  rules: {
    'react-native/sort-styles': 'off',
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        ...MODULE_RESOLVER_CONFIG,
      },
    },
    'import/ignore': ['react-native'],
    react: {
      version: 'detect',
    },
  },
  env: {
    'react-native/react-native': true,
    jest: true,
    es6: true,
    node: true,
  },
};
