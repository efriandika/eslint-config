import tsEslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import react from './react/react';
import reactA11y from './react/react-a11y';

export default tsEslint.config({
  extends: [react, reactHooks.configs['recommended-latest'], reactA11y],
  rules: {
    'jsx-a11y/label-has-associated-control': 'warn',

    'react/jsx-no-bind': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off', // Since we do not use prop-types,
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off', // Since we do not use prop-types,
  },
});
