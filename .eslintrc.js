module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-unescaped-entities': ['warn', { forbid: ['"', "'"] }],
  },
};
