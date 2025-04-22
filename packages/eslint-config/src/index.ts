import tsEslint from 'typescript-eslint';
import airbnbBaseExtended from './airbnb-base-extended';
import unusedImports from 'eslint-plugin-unused-imports';

export default tsEslint.config({
  extends: [
    airbnbBaseExtended, // TODO: This is a workaround until eslint-config-airbnb-base support latest eslint version
  ],
  plugins: {
    'unused-imports': unusedImports,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off', // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html

    // 'jest/no-mocks-import': 'off',

    'no-param-reassign': 'off',
    'no-plusplus': 'off',

    'unused-imports/no-unused-imports': 'error',

    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var', 'if', 'function', 'try', 'return', 'throw', 'export'] },
      { blankLine: 'always', prev: ['const', 'let', 'var', 'if', 'function', 'try', 'case', 'default', 'import'], next: '*' },
      {
        blankLine: 'any',
        prev: ['singleline-const', 'let', 'var', 'import', 'export'],
        next: ['singleline-const', 'let', 'var', 'import', 'export'],
      },
    ],
  },
});
