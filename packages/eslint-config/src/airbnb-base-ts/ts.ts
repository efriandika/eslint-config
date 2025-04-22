import tsEslint from 'typescript-eslint';
import baseBestPractices from '../airbnb-base/best-practices';
import baseErrors from '../airbnb-base/errors';
import baseImports from '../airbnb-base/imports';
import baseVariables from '../airbnb-base/variables';
import esConfig from '../airbnb-base-extended/es';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import importPlugin from 'eslint-plugin-import';
import { Linter } from 'eslint';

/*
 eslint-disable @typescript-eslint/no-non-null-assertion
 */
const baseBestPracticesRules = baseBestPractices[0].rules!;
const baseErrorsRules = baseErrors[0].rules!;
const baseES6Rules = esConfig[0].rules!;
const baseImportsRules = baseImports[0].rules!;
const baseVariablesRules = baseVariables[0].rules!;

export default tsEslint.config([
  {
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      import: importPlugin,
    },
    settings: {
      // Apply special parsing for TypeScript files
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      },
      // Append 'ts' extensions to Airbnb 'import/resolver' setting
      // Original: ['', '.js', '.json']
      'import/resolver': {
        node: {
          extensions: ['', '.js', 'jsx', '.json', '.ts', '.tsx', '.d.ts'],
        },
      },
      // Append 'ts' extensions to Airbnb 'import/extensions' setting
      // Original: ['.js', '', '.jsx']
      'import/extensions': ['.js', '', '.jsx', '.ts', '.tsx', '.d.ts'],
      // Resolve type definition packages
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    },
    rules: {
      // Replace Airbnb 'default-param-last' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/default-param-last.md
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': baseBestPracticesRules['default-param-last'],

      // Replace Airbnb 'dot-notation' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

      // Replace Airbnb 'no-dupe-class-members' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': baseES6Rules['no-dupe-class-members'],

      // Replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': baseBestPracticesRules['no-empty-function'],

      // Replace Airbnb 'no-extra-parens' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
      'no-extra-parens': 'off',
      '@typescript-eslint/no-extra-parens': baseErrorsRules['no-extra-parens'],

      // Replace Airbnb 'no-implied-eval' and 'no-new-func' rules with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
      'no-implied-eval': 'off',
      'no-new-func': 'off',
      '@typescript-eslint/no-implied-eval': baseBestPracticesRules['no-implied-eval'],

      // Replace Airbnb 'no-loss-of-precision' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
      'no-loss-of-precision': 'off',
      '@typescript-eslint/no-loss-of-precision': baseErrorsRules['no-loss-of-precision'],

      // Replace Airbnb 'no-loop-func' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
      'no-loop-func': 'off',
      '@typescript-eslint/no-loop-func': baseBestPracticesRules['no-loop-func'],

      // Replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': baseBestPracticesRules['no-magic-numbers'],

      // Replace Airbnb 'no-redeclare' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': baseBestPracticesRules['no-redeclare'],

      // Replace Airbnb 'no-shadow' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': baseVariablesRules['no-shadow'],

      // Replace Airbnb 'no-throw-literal' rule with '@typescript-eslint' version
      // https://typescript-eslint.io/rules/only-throw-error
      'no-throw-literal': 'off',
      '@typescript-eslint/only-throw-error': baseBestPracticesRules['no-throw-literal'],

      // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': baseBestPracticesRules['no-unused-expressions'],

      // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

      // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': baseVariablesRules['no-use-before-define'],

      // Replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': baseES6Rules['no-useless-constructor'],

      // Replace Airbnb 'require-await' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
      'require-await': 'off',
      '@typescript-eslint/require-await': baseBestPracticesRules['require-await'],

      // Replace Airbnb 'no-return-await' rule with '@typescript-eslint' version
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
      'no-return-await': 'off',
      '@typescript-eslint/return-await': [baseBestPracticesRules['no-return-await'] as Linter.StringSeverity, 'in-try-catch'],

      // Append 'ts' and 'tsx' to Airbnb 'import/extensions' rule
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
      'import/extensions': [
        (baseImportsRules['import/extensions'] as Linter.RuleSeverityAndOptions)[0],
        (baseImportsRules['import/extensions'] as Linter.RuleSeverityAndOptions)[1],
        {
          ...(baseImportsRules['import/extensions'] as Linter.RuleSeverityAndOptions)[2],
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
  },
  {
    rules: {
      // The following rules are enabled in Airbnb config, but are already checked (more thoroughly) by the TypeScript compiler
      // Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
      // Rules are inspired by: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
      'constructor-super': 'off',
      'getter-return': 'off',
      'no-const-assign': 'off',
      'no-dupe-args': 'off',
      'no-dupe-class-members': 'off',
      'no-dupe-keys': 'off',
      'no-func-assign': 'off',
      'no-import-assign': 'off',
      'no-new-symbol': 'off',
      'no-obj-calls': 'off',
      'no-redeclare': 'off',
      'no-setter-return': 'off',
      'no-this-before-super': 'off',
      'no-undef': 'off',
      'no-unreachable': 'off',
      'no-unsafe-negation': 'off',
      'valid-typeof': 'off',

      // The following rules are enabled in Airbnb config, but are recommended to be disabled within TypeScript projects
      // See: https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
]);

/*
 eslint-enable @typescript-eslint/no-non-null-assertion
 */
