module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'warn',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'max-len': ['error', { code: 100 }],
  },
};
