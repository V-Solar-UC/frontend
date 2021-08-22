module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['vue'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'max-len': [
      2,
      120,
      {
        ignorePattern: '^\\s.+class="',
      },
    ],
  },
};
