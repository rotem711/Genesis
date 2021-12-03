const eslintConfig = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'explicit-module-boundary-types': 'off',
    'prettier/prettier': [1, { endOfLine: 'auto' }, { usePrettierrc: true }],
  },
}

module.exports = eslintConfig
