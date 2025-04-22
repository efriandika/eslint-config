import tsEslint from 'typescript-eslint';
import styleTsConfig from './airbnb-base-ts/style-ts';
import tsConfig from './airbnb-base-ts/ts';

export default tsEslint.config([
  {
    files: ['*/**.ts', '*/**.tsx'],
    extends: [styleTsConfig, tsConfig],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/lines-between-class-members': 'off',

      'unused-imports/no-unused-vars': 'off', // duplicate to @typescript-eslint/no-unused-vars
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'all', argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],

      '@typescript-eslint/no-use-before-define': 'off',
    },
  },
]);
