/*
 * @Description:
 * @Author: wanghengzhen
 * @Date: 2022-02-11 15:43:38
 * @LastEditTime: 2022-02-11 16:23:22
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020
  },
  globals: {
    __webpack_public_path__: true
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    camelcase: 'off',
    'react/prop-types': 0,
    // 'react/display-name': 0,
    'react/jsx-uses-react': 2,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/camelcase': ['off', { properties: 'always' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true
      }
    ]
  }
}
