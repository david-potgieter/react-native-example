module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'import',
    'testing-library',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {checksVoidReturn: false},
    ],
    indent: ['error', 2, {SwitchCase: 1}],
    quotes: ['error', 'single', {avoidEscape: true}],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {props: 'never', children: 'never'},
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent','sibling', 'index'],
        pathGroups: [
          {
            pattern: '@*/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '[iI]gnored',
        varsIgnorePattern: '[iI]gnored',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {project: './'},
    },
  },
};
