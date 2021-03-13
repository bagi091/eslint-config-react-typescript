'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },

    // typescript-eslint specific options
    warnOnUnsupportedTypeScriptVersion: true,
  },
  // parserOptions: {
  //   // project: "./tsconfig.json",
  // },

  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb/whitespace',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  rules: {
    //    "import/order": ['error', { groups: [['builtin', 'external', 'internal']] }]
  },
};
