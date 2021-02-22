module.exports = {
  extensions: ['.ts', '.ios.ts', '.android.ts', '.tsx', '.ios.tsx', '.android.tsx', '.js', '.json', '.png'],
  alias: {
    '@app': './',
    '@assets': './src/assets',
    '@components': './src/components',
    '@containers': './src/components/containers',
    '@presentational': './src/components/presentational',
    '@hooks': './src/components/hooks',
    '@core': './src/core',
    '@flux': './src/core/flux',
    '@selectors': './src/core/flux/selectors',
    '@functions': './src/core/functions',
    '@typings': './src/typings',
  },
};
