module.exports = { // eslint-disable-line
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard', // https://standardjs.com/rules-zhcn.html
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    quotes: [1, "double"],
    semi: ["error", "always", { "omitLastInOneLineBlock": true }],
    "space-before-function-paren": ["error", "never"],
    "comma-dangle": ["error", "only-multiline"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
}
