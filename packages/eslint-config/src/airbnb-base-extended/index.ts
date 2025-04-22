import tsEslint from 'typescript-eslint';
import baseBestPractices from '../airbnb-base/best-practices';
import baseErrors from '../airbnb-base/errors';
import baseImports from '../airbnb-base/imports';
import baseNode from '../airbnb-base/node';
import baseVariables from '../airbnb-base/variables';
import esConfig from './es';
import styleConfig from './style';

export default tsEslint.config([
  {
    extends: [
      // AirBnb Base Config
      // TODO: this is a workaround until eslint-config-airbnb-base support latest eslint version
      baseBestPractices,
      baseErrors,
      baseImports,
      baseNode,
      baseVariables,

      // Modified AirBnb Base Config
      // TODO: this is a workaround until eslint-config-airbnb-base support latest stylistic version
      esConfig,
      styleConfig,
    ],
  },
]);
