module.exports = {
  extends: ['react-app', 'airbnb', 'plugin:jsx-a11y/recommended', 'prettier'],
  plugins: ['jsx-a11y', 'prettier'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: true,
        singleQuote: true,
      },
    ],
    'react/no-unstable-nested-components': [
      'off' || 'warn' || 'error',
      { allowAsProps: true },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};
